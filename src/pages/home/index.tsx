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

  const keywords = [
    { key: "KRW", label: "KRW" },
    { key: "BTC", label: "BTC" },
    { key: "USDT", label: "USDT" },
  ];

  const [selectedFilter, setSelectedFilter] = useState(keywords[0]);

  const data = [
    {
      market: "KRW-BTC",
      koreanName: "비트코인",
      englishName: "bitcoin",
      tradePrice: "229,526백만",
      kimchiPremium: 1.8,
      change: "",
      changePrice: "45,000",
      changeRate: 0.48,
      accTradePrice24h: "80,9555,000",
    },
    {
      market: "KRW-ETH",
      koreanName: "이더리움",
      englishName: "etherium",
      tradePrice: "18,526백만",
      kimchiPremium: -2.3,
      change: "",
      changePrice: "-45,000",
      changeRate: -0.6,
      accTradePrice24h: "50,9555,000",
    },
    {
      market: "KRW-XRP",
      koreanName: "리플",
      englishName: "ripple",
      tradePrice: "526만",
      kimchiPremium: 3.2,
      change: "",
      changePrice: "45,000",
      changeRate: 1.25,
      accTradePrice24h: "10,9555,000",
    },
    {
      market: "KRW-NEO",
      koreanName: "네오",
      englishName: "neo",
      tradePrice: "26백만",
      kimchiPremium: 0.8,
      change: "",
      changePrice: "-45,000",
      changeRate: -0.2,
      accTradePrice24h: "30,9555,000",
    },
    {
      market: "KRW-MTL",
      koreanName: "메탈",
      englishName: "metal",
      tradePrice: "1,526만",
      kimchiPremium: -1.5,
      change: "",
      changePrice: "45,000",
      changeRate: 0.1,
      accTradePrice24h: "40,9555,000",
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
