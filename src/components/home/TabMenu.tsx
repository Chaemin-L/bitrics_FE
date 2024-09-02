import React, { useState } from "react";
import clsx from "clsx";
interface TabMenuProps {
  tabs: string[];
  children: React.ReactNode[];
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-xl mx-auto mt-4">
      <div>
        <div className="flex border-b border-purple-100">
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
        <div>{children[activeTab]}</div>
      </div>
    </div>
  );
};

export default TabMenu;
