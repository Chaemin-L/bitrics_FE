import ScrollChartButton from "@/components/home/ScrollChartButton";
import TabMenu from "@/components/home/TabMenu";
import CryptoList from "@/components/home/CryptoList";

const HomePage = () => {
  const buttons = [
    {
      label: "BTC 김치프리미엄",
      value: "+1.35%",
      change: "해외보다 비싸요",
      isPositive: true,
    },
    {
      label: "BTC 점유율",
      value: "56.40%",
      change: "+0.12%",
      isPositive: true,
    },
    {
      label: "환율(USD/KRW)",
      value: "1,344.73",
      change: "-0.12%",
      isPositive: false,
    },
    {
      label: "BTC/USD",
      value: "60,411.00",
      change: "+2.14%",
      isPositive: true,
    },
    { label: "BTC 롱", value: "66.80%", change: "", isPositive: true },
    { label: "BTC 숏", value: "33.20%", change: "", isPositive: true },
  ];

  const data = [
    {
      name: "비트코인",
      market: "BTC-KRW",
      currentPrice: "229,526백만",
      kpPercent: 1.8,
      kpPrice: "1,422,880",
      changedPercent: 0.48,
      changedPrice: "45,000",
      tradingVolume: "80,9555,000",
    },
    {
      name: "이더리움",
      market: "BTC-KRW",
      currentPrice: "18,526백만",
      kpPercent: -2.3,
      kpPrice: "-1,422,880",
      changedPercent: -0.6,
      changedPrice: "-45,000",
      tradingVolume: "50,9555,000",
    },
    {
      name: "리플",
      market: "BTC-KRW",
      currentPrice: "526만",
      kpPercent: 3.2,
      kpPrice: "1,422,880",
      changedPercent: 1.25,
      changedPrice: "45,000",
      tradingVolume: "10,9555,000",
    },
    {
      name: "솔라나",
      market: "BTC-KRW",
      currentPrice: "26백만",
      kpPercent: 0.8,
      kpPrice: "1,422,880",
      changedPercent: -0.2,
      changedPrice: "-45,000",
      tradingVolume: "30,9555,000",
    },
    {
      name: "에이다",
      market: "BTC-KRW",
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
          <CryptoList data={data} />
        </div>
        <div>시가총액 탭</div>
        <div>관심 탭</div>
      </TabMenu>
    </div>
  );
};

export default HomePage;
