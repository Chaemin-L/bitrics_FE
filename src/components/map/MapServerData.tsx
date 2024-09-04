import { useEffect, useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import classNames from 'classnames';

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

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch('http://3.34.102.121:3000/map');
        const data = await response.json();
        const correctedData: MarkerData[] = data.map((marker: MarkerData) => ({
        ...marker,
          lng: marker.lon !== undefined ? marker.lon : marker.lng
        }));

        console.log('Fetched markers:', correctedData);
        setMarkers(correctedData);
      } catch (error) {
        console.error('Error fetching marker data:', error);
      }
    };

    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyBfJt4dILwxf5WqJDcERS1zyZwEQe3dhpk',
        version: 'weekly',
      });

      await loader.load();
      if (mapRef.current && !map) {
        const initializedMap = new google.maps.Map(mapRef.current, {
          center: { lat: 37.5665, lng: 126.9780 }, 
          zoom: 12,
        });
        console.log('Map initialized:', initializedMap);
        setMap(initializedMap);

        fetchMarkers();
      }
    };

    initializeMap();
  }, []);

    useEffect(() => {
      if(map && markers.length > 0) {
        console.log('Adding markers:', markers);
        markers.forEach(({ lat, lng, city, name,}) => {
          const marker = new google.maps.Marker({
            position: { lat, lng },
            map
          });
          const infoWindowContent = `
            <div class="${classNames(
              'p-2',
              'bg-white',
            )}">
              <h1 class="${classNames(
                'text-sm',
                'font-semibold',
                'text-gray-900',
                'mb-1',
                'mt-0'
              )}">${city}</h1>
              <p class="text-xs text-gray-600">${name}</p>
            </div>`;

          const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent,
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
    }
  }, [map,markers]);

  return <div ref={mapRef} className="h-[600px] w-[100%]" />;
};

export default GoogleMapWithServerData;
