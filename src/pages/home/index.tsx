import { useState } from "react";
import ScrollChartButton from "@/components/home/ScrollChartButton";
import TabMenu from "@/components/home/TabMenu";
import FilteringHeader from "@/components/news/FilteringHeader";
import CryptoList from "@/components/home/CryptoList";
import MarketCapList from "@/components/home/MarketCapList";
import DataLoader from "@/components/home/DataLoader";
import Loading from "@/components/common/Loading";

const keywords = [
  { key: "KRW", label: "KRW" },
  { key: "BTC", label: "BTC" },
  { key: "USDT", label: "USDT" },
];

const HomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("KRW");

  return (
    <DataLoader>
      {({ exchangeRate, upbitData, coinpaprikaData }) => {
        if (!exchangeRate || !upbitData || !coinpaprikaData) {
          return <Loading />;
        }

        // BTC 김치프리미엄 관련 설정
        const btcKimchPremium = exchangeRate.btcKrwKimchiPremium;
        const btcKimchChange =
          btcKimchPremium > 0 ? "해외보다 비싸요" : "해외보다 싸요";
        const isBtcKimchPositive = btcKimchPremium > 0;

        // 시가총액 및 거래량 관련 설정
        const isMarketCapPositive = exchangeRate.marketCapChange24h > 0;
        const isVolumePositive = exchangeRate.volume24hChange24h > 0;

        return (
          <div>
            <ScrollChartButton
              buttons={[
                {
                  label: "BTC 점유율",
                  value: exchangeRate.btcDominance,
                  change: "", // Unused
                  isPositive: true, // Unused
                  symbol: "BTC.D",
                },
                {
                  label: "BTC/USD",
                  value: exchangeRate.btcUsd,
                  change: "", // Unused
                  isPositive: true, // Unused
                  symbol: "BTCUSD",
                },
                {
                  label: "BTC 김치프리미엄",
                  value: `${btcKimchPremium}%`,
                  change: btcKimchChange,
                  isPositive: isBtcKimchPositive,
                  symbol: "100*USDKRW/USDKRW*(BTCKRW/(BTCUSDT*USDKRW)-1)",
                },
                {
                  label: "환율(USD/KRW)",
                  value: exchangeRate.usdToKrw,
                  change: "", // Unused
                  isPositive: false, // Unused
                  symbol: "USDKRW",
                },
                {
                  label: "시가총액",
                  value: exchangeRate.marketCapUsd,
                  change: `${exchangeRate.marketCapChange24h}%`,
                  isPositive: isMarketCapPositive,
                  symbol: "",
                },
                {
                  label: "거래량",
                  value: exchangeRate.volume24hUsd,
                  change: `${exchangeRate.volume24hChange24h}%`,
                  isPositive: isVolumePositive,
                  symbol: "",
                },
              ]}
            />
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
                  <CryptoList
                    data={upbitData[selectedFilter as keyof typeof upbitData]}
                  />
                </div>
              </div>
              <div className="bg-purple-600 text-white mt-4 -mx-[30px]">
                <MarketCapList data={coinpaprikaData} />
              </div>
              <div>관심 탭</div>
            </TabMenu>
          </div>
        );
      }}
    </DataLoader>
  );
};

export default HomePage;
