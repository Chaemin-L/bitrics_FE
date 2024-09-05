import { PropsWithChildren, useState } from "react";
import { ChevronDown, ChevronUp } from "./Chevron";

interface Props {
  title: string;
}

const DropDown = ({ title, children }: PropsWithChildren<Props>) => {
  const [on, setOn] = useState<boolean>(false);

  const handleClick = () => setOn(!on);

  return (
    <div
      onClick={handleClick}
      className="min-h-[60px] bg-purple-600 p-5 rounded-[10px] space-y-5 cursor-pointer active:cursor-default select-none"
    >
      <div className="flex justify-between">
        <h2 className="text-[16px] text-white">{title}</h2>
        {on ? <ChevronUp /> : <ChevronDown />}
      </div>
      <p className={!on ? "hidden" : "block"}>{children}</p>
    </div>
  );
};

export default DropDown;
