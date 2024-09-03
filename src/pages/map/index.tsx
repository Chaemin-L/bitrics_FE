import GoogleMap from '@/components/map/AtmMap';

const MapPage: React.FC = () => {
  return (
    <div className="">
      <h1 className='text-white mb-5 font-semibold'>가상화폐 ATM 위치</h1>
      <GoogleMap />
    </div>
  );
};

export default MapPage;
