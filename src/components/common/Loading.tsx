const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100px]">
      <div className=" w-fit h-fit my-auto ">
        <span className="w-12 h-12 border-[5px] border-white rounded-full border-b-transparent inline-block box-border animate-[rotation_1s_infinite]" />
      </div>
    </div>
  );
};

export default Loading;
