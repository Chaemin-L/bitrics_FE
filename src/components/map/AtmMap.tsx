import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import classNames from 'classnames';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyBfJt4dILwxf5WqJDcERS1zyZwEQe3dhpk',
      version: 'weekly',
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 37.550263, lng: 126.9970831 },
          zoom: 5,
        });

        const atms = [
          {
            label: 'A',
            city: '명동',
            location:'대한민국 서울특별시 중구 명동 2길 34', 
            lat: 37.5617176,
            lng: 126.9827139,
            buy_sell: true
          },
          {
            label: 'B',
            city: 'Tokyo',
            location:'Akihabara Southern Bldg. 5F Iwamotocho, Chiyoda Ku Tokyo To, 101-0032 Japan',
            lat: 35.6951274,
            lng: 139.7752858,
            buy_sell: true
          },
          {
            label: 'C',
            city: '남산',
            location:'대한민국 서울특별시 중구 명동 2길 34',
            lat: 37.5515,
            lng: 126.988,
            buy_sell: true
          },
        ];

        atms.forEach(({ label, city, lat, lng, location }) => {
          const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map,
          });
          
          const infoWindowContent = `
            <div class="${classNames(
              'p-2', // 패딩 조정
              'bg-white',
              
            )}">
              <h1 class="${classNames(
                'text-sm',
                'font-semibold',
                'text-gray-900',
                'mb-1',
                'mt-0'
              )}">${city}</h1>
              <p class="text-xs text-gray-600">${location}</p>
            </div>`;

          const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent,
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
      }
    });
  }, []);

  return <div ref={mapRef} className="h-[600px] w-[100%]" />;
};

export default GoogleMap;
