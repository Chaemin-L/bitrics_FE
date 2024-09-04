import React, { useRef, useState } from "react";
import clsx from "clsx";
import TradingViewWidget from "./TradingViewWidget";
interface ChartButton {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  symbol: string | null;
}
interface ScrollChartButtonProps {
  buttons: ChartButton[];
}

const ScrollChartButton: React.FC<ScrollChartButtonProps> = ({ buttons }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null
  );
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - scrollContainerRef.current!.offsetLeft;
    scrollLeft = scrollContainerRef.current!.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조정
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleButtonClick = (index: number) => {
    // 현재 선택된 버튼의 symbol이 null이거나 선택된 버튼이 아닌 경우
    if (buttons[index].symbol === null) return; // symbol이 null인 경우 아무 동작도 하지 않음

    // 버튼 클릭 시 선택된 인덱스를 업데이트
    setSelectedButtonIndex(selectedButtonIndex === index ? null : index);
  };

  return (
    <div className="-mx-[30px] relative ">
      <div
        ref={scrollContainerRef}
        className=" scrollbar-hide overflow-x-auto whitespace-nowrap w-full cursor-pointer select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className="inline-flex space-x-[10px]">
          {buttons.map((button, index) => (
            <div key={index} className="flex-shrink-0">
              <div
                className={clsx(
                  ` text-white p-4 rounded-[10px] min-w-[125px] min-h-[96px]`,
                  selectedButtonIndex === index
                    ? "bg-purple-400"
                    : "bg-purple-600"
                )}
                onClick={() => handleButtonClick(index)}
              >
                <div className="text-sm font-medium">{button.label}</div>
                <div className="text-lg font-bold">{button.value}</div>
                <div
                  className={clsx(
                    `text-xs`,
                    button.isPositive ? "text-red" : "text-blue"
                  )}
                >
                  {button.change}
                </div>
              </div>
              {selectedButtonIndex === index && button.symbol && (
                <>
                  <div className="h-[328px] w-full left-0">
                    <div className="absolute top-[96px] mt-4 left-0 w-full h-[300px] ">
                      <TradingViewWidget symbol={button.symbol} />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollChartButton;
