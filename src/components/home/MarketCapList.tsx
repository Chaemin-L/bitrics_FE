import React, { useState, useEffect } from "react";
import clsx from "clsx";
interface MarketCapData {
  market: string;
  name: string;
  marketCap: number;
  tradingVolume: number;
}

const MarketCapList: React.FC = () => {
  const [data, setData] = useState<MarketCapData[]>([
    { market: "BTC", name: "비트코인", marketCap: 1564, tradingVolume: 41.6 },
    { market: "ETH", name: "이더리움", marketCap: 456, tradingVolume: 18.2 },
    { market: "XRP", name: "리플", marketCap: 105, tradingVolume: 22.8 },
    { market: "LTC", name: "라이트코인", marketCap: 65, tradingVolume: 5.1 },
    { market: "BCH", name: "비트코인캐시", marketCap: 76, tradingVolume: 6.8 },
    {
      market: "BNB",
      name: "바이낸스코인",
      marketCap: 304,
      tradingVolume: 12.5,
    },
    { market: "ADA", name: "에이다", marketCap: 85, tradingVolume: 3.2 },
    { market: "DOT", name: "폴카닷", marketCap: 50, tradingVolume: 2.9 },
    { market: "LINK", name: "체인링크", marketCap: 40, tradingVolume: 1.8 },
    { market: "DOGE", name: "도지코인", marketCap: 35, tradingVolume: 4.3 },
  ]);

  const [sortKey, setSortKey] = useState<"marketCap" | "tradingVolume">(
    "marketCap"
  );

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => b[sortKey] - a[sortKey]);
    setData(sortedData);
  }, [sortKey]);

  const handleSort = (key: "marketCap" | "tradingVolume") => {
    setSortKey(key);
  };

  return (
    <div>
      <div className="flex justify-between p-2 border-b border-purple-100 text-sm text-bold">
        <div className="w-1/6 text-center">순위</div>
        <div className="w-2/6 text-left">이름</div>
        <div
          className={clsx(
            `w-1/6 text-right cursor-pointer`,
            sortKey === "marketCap" ? "font-bold" : "text-contrast-200"
          )}
          onClick={() => handleSort("marketCap")}
        >
          시가총액
        </div>
        <div
          className={clsx(
            `w-1/6 text-right cursor-pointer`,
            sortKey === "tradingVolume" ? "font-bold" : "text-contrast-200"
          )}
          onClick={() => handleSort("tradingVolume")}
        >
          거래대금
        </div>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between p-2 border-b border-purple-100 text-xs"
        >
          <div className="w-1/6 text-center">{index + 1}</div>
          <div className="w-2/6 text-left">
            <div>
              {item.market} - {item.name}
            </div>
          </div>
          <div className="w-1/6 text-right">
            {item.marketCap.toLocaleString()}조
          </div>
          <div className="w-1/6 text-right">
            {item.tradingVolume.toLocaleString()}조
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketCapList;
