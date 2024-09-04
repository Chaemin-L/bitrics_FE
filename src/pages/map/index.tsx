import GoogleMapWithServerData from '@/components/map/MapServerData';

const MapPage: React.FC = () => {
  return (
    <div className="">
      <h1 className='text-white mb-5 font-semibold'>가상화폐 ATM 위치</h1>
      <GoogleMapWithServerData />
    </div>
  );
};

export default MapPage;
