import { PropsWithChildren, useState } from "react";
import { ChevronDown, ChevronUp } from "./Chevron";
import clsx from "clsx";

interface Props {
  title: string;
  totalAssets: number;
  evaluatingIncome: number;
}

const DropDown = ({
  title,
  totalAssets,
  evaluatingIncome,
}: PropsWithChildren<Props>) => {
  const [on, setOn] = useState<boolean>(false);

  const handleClick = () => setOn(!on);

  return (
    <div
      onClick={handleClick}
      className="min-h-[60px] bg-purple-600 p-5 rounded-[10px] space-y-5 cursor-pointer active:cursor-default select-none"
    >
      <div className="flex justify-between">
        <h2 className="text-[16px] text-white">{title}</h2>
        {/* {on ? <ChevronUp /> : <ChevronDown />}
      </div>
      <p className={!on ? "hidden" : "block"}>{children}</p> */}
        {on ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div className={clsx("space-y-4 text-white w-full", on && "hidden")}>
        <div className="flex gap-2 justify-between">
          <div className="flex-1 pr-2">
            <h3 className="text-sm">보유 KRW</h3>
            <span className="pb-3">0</span>
          </div>
          <div className="bg-contrast-100 h-10 w-[1px]" />
          <div className="pl-2 flex-1">
            <h3>총 보유자산</h3>
            <span className="pb-3">{totalAssets.toLocaleString("ko-KR")}</span>
          </div>
        </div>
        <div className="flex gap-2 justify-between pt-3 border-t border-purple-100">
          <div className="flex-1">
            <div className="flex-1 flex justify-between pr-2">
              <span>총 매수</span>
              <span>20</span>
            </div>
            <div className="flex-1 flex justify-between pr-2">
              <span>총 평가</span>
              <span>25</span>
            </div>
            <div className="flex-1 flex justify-between pr-2">
              <span>주문가능</span>
              <span>5</span>
            </div>
          </div>
          <div className=" h-10 w-[1px]" />

          <div className="flex-1 text-white">
            <div className="flex-1 flex justify-between">
              <span>평가손익</span>
              <span>{evaluatingIncome.toLocaleString("ko-KR")}</span>
            </div>
            <div className="flex-1  flex justify-between">
              <span>수익률</span>
              <span>25%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
