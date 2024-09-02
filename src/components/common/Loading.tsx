const Loading = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1 -translate-y-1/2 ">
        <span className="w-12 h-12 border-[5px] border-white rounded-full border-b-transparent inline-block box-border animate-[rotation_1s_infinite]" />
      </div>
    </div>
  );
};

export default Loading;
