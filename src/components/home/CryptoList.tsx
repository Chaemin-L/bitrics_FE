import React from "react";

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
        <div
          key={index}
          className="flex justify-between p-2 border-b border-contrast-300 text-xs"
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
      ))}
    </div>
  );
};

export default CryptoList;
