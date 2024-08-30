import React, { useRef } from 'react';

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

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-x-hidden whitespace-nowrap w-full cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
    >
      <div className="inline-flex space-x-[10px]">
        {buttons.map((button, index) => (
          <div
            key={index}
            className="bg-purple-600 text-white p-4 rounded-[10px] min-w-[125px]"
          >
            <div className="text-sm font-medium">{button.label}</div>
            <div className="text-lg font-bold">{button.value}</div>
            <div className={`text-xs ${button.isPositive ? 'text-red' : 'text-blue'}`}>
              {button.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollChartButton;