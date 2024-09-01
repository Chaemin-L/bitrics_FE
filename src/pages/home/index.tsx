import ScrollChartButton from "@/components/home/ScrollChartButton";
import TabMenu from "@/components/home/TabMenu";

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

  return (
    <div>
      <ScrollChartButton buttons={buttons} />
      <TabMenu tabs={["김프", "시가총액", "관심"]}>
        <div>김프 탭</div>
        <div>시가총액 탭</div>
        <div>관심 탭</div>
      </TabMenu>
    </div>
  );
};

export default HomePage;
