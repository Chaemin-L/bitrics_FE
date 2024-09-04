import { useEffect, useState, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import clsx from "clsx";
import axiosInstance from "@/api/axiosInstance";

interface MarkerData {
  lon: undefined;
  id: number;
  city: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  buy_sell: boolean;
}

const GoogleMapWithServerData: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  useEffect(() => {
    const axiosMarkers = async () => {
      try {
        const response = await axiosInstance.get("/map");
        const data = await response.data;
        const correctedData: MarkerData[] = data.map((marker: MarkerData) => ({
          ...marker,
          lng: marker.lon !== undefined ? marker.lon : marker.lng,
        }));

        console.log("axios markers:", correctedData);
        setMarkers(correctedData);
      } catch (error) {
        console.error("Error axios marker data:", error);
      }
    };

    const initializeMap = async () => {
      if (apiKey) {
        const loader = new Loader({
          apiKey: apiKey,
          version: "weekly",
        });

        await loader.load();
        if (mapRef.current && !map) {
          const initializedMap = new google.maps.Map(mapRef.current, {
            center: { lat: 31.883162, lng: 127.080855 },
            zoom: 5,
          });
          console.log("Map initialized:", initializedMap);
          setMap(initializedMap);

          axiosMarkers();
        }
      } else {
        console.error("API KEY is missing");
      }
    };

    initializeMap();
  }, [apiKey]);

  useEffect(() => {
    if (map && markers.length > 0) {
      console.log("Adding markers:", markers);
      markers.forEach(({ lat, lng, city, name }) => {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          map,
        });
        const infoWindowContent = `
            <div class="${clsx("p-2", "bg-white")}">
              <h1 class="${clsx(
                "text-sm",
                "font-semibold",
                "text-gray-900",
                "mb-1",
                "mt-0"
              )}">${city}</h1>
              <p class="text-xs text-gray-600">${name}</p>
            </div>`;

        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    }
  }, [map, markers]);

  return <div ref={mapRef} className="h-[600px] w-[100%]" />;
};

export default GoogleMapWithServerData;
