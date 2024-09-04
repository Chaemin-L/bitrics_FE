import React, { useState, useEffect } from "react";
import clsx from "clsx";
interface MarketCapData {
  rank: number;
  name: string;
  symbol: string;
  marketCap: number;
  volume24h: number;
}

interface MarketCapListProps {
  data: MarketCapData[];
}

const MarketCapList: React.FC<MarketCapListProps> = ({ data }) => {
  const [sortedData, setSortedData] = useState<MarketCapData[]>(data);
  const [sortKey, setSortKey] = useState<"marketCap" | "volume24h">(
    "marketCap"
  );

  useEffect(() => {
    const sorted = [...data].sort((a, b) => b[sortKey] - a[sortKey]);
    setSortedData(sorted);
  }, [data, sortKey]);

  const handleSort = (key: "marketCap" | "volume24h") => {
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
            sortKey === "volume24h" ? "font-bold" : "text-contrast-200"
          )}
          onClick={() => handleSort("volume24h")}
        >
          거래대금
        </div>
      </div>
      {sortedData.map((item, index) => (
        <div
          key={index}
          className="flex justify-between p-2 border-b border-purple-100 text-xs"
        >
          <div className="w-1/6 text-center">{index + 1}</div>
          <div className="w-2/6 text-left">
            <div>
              {item.name}({item.symbol})
            </div>
          </div>
          <div className="w-1/6 text-right">
            {item.marketCap.toLocaleString(undefined, {
              maximumFractionDigits: 1,
            })}
          </div>
          <div className="w-1/6 text-right">
            {item.volume24h.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketCapList;
