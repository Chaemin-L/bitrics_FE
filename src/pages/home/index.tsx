import ScrollChartButton from "@/components/home/ScrollChartButton";

const HomePage = () => {
  const buttons = [
    { label: 'BTC 김치프리미엄', value: '+1.35%', change: '해외보다 비싸요', isPositive: true },
    { label: 'BTC 점유율', value: '56.40%', change: '+0.12%', isPositive: true },
    { label: '환율(USD/KRW)', value: '1,344.73', change: '-0.12%', isPositive: false },
    { label: 'BTC/USD', value: '60,411.00', change: '+2.14%', isPositive: true },
  ];

  return (
    <div className="absolute inset-0 px-0 py-0">
      <ScrollChartButton buttons={buttons} />
      {/* 다른 컨텐츠 */}
    </div>
  );
};

export default HomePage;