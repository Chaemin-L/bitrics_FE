import FilteringHeader from "@/components/news/FilteringHeader";
import ListView from "@/components/news/ListView";
// import ListView from "@/components/news/ListView";
import { useState } from "react";

export interface INews {
  title: string;
  content: string;
  media: string;
  createdAt: string;
  href: string;
}

const NewsPage = () => {
  const [selected, setSelected] = useState("crypto");
  const keywords = [
    { key: "crypto", label: "가상화폐" },
    { key: "stock", label: "주식" },
    { key: "economy", label: "경제" },
  ];

  return (
    <div className="flex flex-col gap-6 h-auto min-h-full">
      <FilteringHeader
        keywords={keywords}
        selected={selected}
        setSelected={setSelected}
      />
      <ListView selected={selected} />
    </div>
  );
};

// const listData = Array(10).fill({
//   media: "한국경제신문",
//   title: `"작년 세계 가상화폐 탈취액 3분의 1은 北소행…올해 더 늘것"`,
//   description: `외교부·美국무부 '北가상자산 세탁차단' 심포지엄…관련업계 참석해 정보공유 이지헌 특파원 = 북한이 핵과 미사일 프로그램 개발 자금을 마련하기 위해 가상화폐 탈취를 지속하고 있으며 탈취액은 올해 들어 더 늘어날 것이란 관측이 나온다. 세스 베일리 `,
//   createdAt: "2024.07.27.",
// });

export default NewsPage;
