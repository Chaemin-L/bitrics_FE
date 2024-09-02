import { useState } from "react";
import ScrollChartButton from "@/components/home/ScrollChartButton";
import TabMenu from "@/components/home/TabMenu";
import FilteringHeader from "@/components/news/FilteringHeader";
import CryptoList from "@/components/home/CryptoList";
import MarketCapList from "@/components/home/MarketCapList";

const HomePage = () => {
  const buttons = [
    {
      label: "BTC 김치프리미엄",
      value: "+1.35%",
      change: "해외보다 비싸요",
      isPositive: true,
      symbol: "100*USDKRW/USDKRW*(BTCKRW/(BTCUSDT*USDKRW)-1)",
    },
    {
      label: "BTC 점유율",
      value: "56.40%",
      change: "+0.12%",
      isPositive: true,
      symbol: "BTC.D",
    },
    {
      label: "환율(USD/KRW)",
      value: "1,344.73",
      change: "-0.12%",
      isPositive: false,
      symbol: "USDKRW",
    },
    {
      label: "BTC/USD",
      value: "60,411.00",
      change: "+2.14%",
      isPositive: true,
      symbol: "BTCUSD",
    },
    {
      label: "BTC 롱",
      value: "66.80%",
      change: "",
      isPositive: true,
      symbol: "BTCUSDLONGS",
    },
    {
      label: "BTC 숏",
      value: "33.20%",
      change: "",
      isPositive: true,
      symbol: "BTCUSDSHORTS",
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState("KRW");
  const keywords = [
    { key: "KRW", label: "KRW" },
    { key: "BTC", label: "BTC" },
    { key: "USDT", label: "USDT" },
  ];

  const data = [
    {
      name: "비트코인",
      market: "KRW-BTC",
      currentPrice: "229,526백만",
      kpPercent: 1.8,
      kpPrice: "1,422,880",
      changedPercent: 0.48,
      changedPrice: "45,000",
      tradingVolume: "80,9555,000",
    },
    {
      name: "이더리움",
      market: "KRW-ETH",
      currentPrice: "18,526백만",
      kpPercent: -2.3,
      kpPrice: "-1,422,880",
      changedPercent: -0.6,
      changedPrice: "-45,000",
      tradingVolume: "50,9555,000",
    },
    {
      name: "리플",
      market: "KRW-XRP",
      currentPrice: "526만",
      kpPercent: 3.2,
      kpPrice: "1,422,880",
      changedPercent: 1.25,
      changedPrice: "45,000",
      tradingVolume: "10,9555,000",
    },
    {
      name: "네오",
      market: "KRW-NEO",
      currentPrice: "26백만",
      kpPercent: 0.8,
      kpPrice: "1,422,880",
      changedPercent: -0.2,
      changedPrice: "-45,000",
      tradingVolume: "30,9555,000",
    },
    {
      name: "메탈",
      market: "KRW-MTL",
      currentPrice: "1,526만",
      kpPercent: -1.5,
      kpPrice: "-1,422,880",
      changedPercent: 0.1,
      changedPrice: "45,000",
      tradingVolume: "40,9555,000",
    },
  ];

  return (
    <div>
      <ScrollChartButton buttons={buttons} />
      <TabMenu tabs={["김프", "시가총액", "관심"]}>
        <div>
          <div className="mt-4">
            <FilteringHeader
              keywords={keywords}
              selected={selectedFilter}
              setSelected={setSelectedFilter}
            />
          </div>
          <div className="bg-purple-600 text-white mt-4 -mx-[30px]">
            <CryptoList data={data} />
          </div>
        </div>
        <div className="bg-purple-600 text-white mt-4 -mx-[30px]">
          <MarketCapList />
        </div>
        <div>관심 탭</div>
      </TabMenu>
    </div>
  );
};

export default HomePage;
