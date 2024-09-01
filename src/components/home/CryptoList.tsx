import React, { useState } from "react";

interface CryptoData {
  name: string;
  market: string;
  currentPrice: string;
  kpPercent: number;
  kpPrice: string;
  changedPercent: number;
  changedPrice: string;
  tradingVolume: string;
}

interface CryptoListProps {
  data: CryptoData[];
}

const CryptoList: React.FC<CryptoListProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="flex justify-between p-2 border-b border-contrast-300 text-sm text-bold">
        <div className="w-1/5 text-left">한글명</div>
        <div className="w-1/5 text-right">현재가</div>
        <div className="w-1/5 text-right">김프</div>
        <div className="w-1/5 text-right">전일대비</div>
        <div className="w-1/5 text-right">거래대금</div>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <div
            className="flex justify-between p-2 border-b border-contrast-300 text-xs cursor-pointer"
            onClick={() => handleRowClick(index)}
          >
            <div className="w-1/5 text-left">
              <div>{item.name}</div>
              <div className="text-contrast-200">{item.market}</div>
            </div>
            <div className="w-1/5 text-right">{item.currentPrice}</div>
            {/* 김프 정보 (퍼센트 + 금액) */}
            <div className="w-1/5 text-right text-contrast-200">
              {item.kpPercent > 0 ? (
                <div>
                  <div className="text-red">+{item.kpPercent.toFixed(2)}%</div>
                  <div>+{item.kpPrice}</div>
                </div>
              ) : (
                <div>
                  <div className="text-blue">{item.kpPercent.toFixed(2)}%</div>
                  <div>{item.kpPrice}</div>
                </div>
              )}
            </div>
            {/* 전일대비 정보 (퍼센트 + 금액) */}
            <div className="w-1/5 text-right text-contrast-200">
              {item.changedPercent > 0 ? (
                <div>
                  <div className="text-red">
                    +{item.changedPercent.toFixed(2)}%
                  </div>
                  <div>+{item.changedPrice}</div>
                </div>
              ) : (
                <div>
                  <div className="text-blue">
                    {item.changedPercent.toFixed(2)}%
                  </div>
                  <div>{item.changedPrice}</div>
                </div>
              )}
            </div>
            <div className="w-1/5 text-right">{item.tradingVolume}</div>
          </div>
          {/* 토글된 경우에만 차트 표시 */}
          {selectedIndex === index && (
            <div className="p-2 border-b border-contrast-300 bg-purple-700 text-xs text-gray-300">
              <p>차트 나타나는 공간</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
