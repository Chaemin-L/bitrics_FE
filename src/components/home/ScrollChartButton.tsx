import React, { useRef, useState } from "react";
import clsx from "clsx";
interface ChartButton {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
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
    setSelectedButtonIndex(selectedButtonIndex === index ? null : index);
  };

  return (
    <div className="-mx-[30px]">
      <div>
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide overflow-x-auto whitespace-nowrap w-full cursor-pointer select-none"
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
                    `text-white p-4 rounded-[10px] min-w-[125px] min-h-[96px]`,
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
              </div>
            ))}
          </div>
        </div>
        {selectedButtonIndex !== null && (
          <div className="bg-contrast-200 p-4 mt-4 w-full">
            <p>차트 나타나는 곳</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollChartButton;
