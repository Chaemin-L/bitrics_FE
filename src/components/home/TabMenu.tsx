import React, { useState } from "react";
import clsx from "clsx";
import FilteringHeader from "../news/FilteringHeader";

interface TabMenuProps {
  tabs: string[];
  children: React.ReactNode[];
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("KRW");
  const keywords = [
    { key: "KRW", label: "KRW" },
    { key: "BTC", label: "BTC" },
    { key: "USDT", label: "USDT" },
  ];

  return (
    <div className="max-w-xl mx-auto mt-4">
      <div>
        <div className="flex border-b border-contrast-300">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={clsx(
                `flex-1 cursor-pointer text-center py-2 px-4`,
                activeTab === index
                  ? "border-b-2 border-purple-200 text-purple-200 font-bold"
                  : "text-white"
              )}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <FilteringHeader
            keywords={keywords}
            selected={selectedFilter}
            setSelected={setSelectedFilter}
          />
        </div>
        <div className="bg-purple-600 text-white mt-4 -mx-[30px]">
          {children[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
