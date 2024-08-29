import FilteringHeader from "@/components/news/FilteringHeader";
import { useState } from "react";

const NewsPage = () => {
  const [selected, setSelected] = useState("crypto");
  const keywords = [
    { key: "crypto", label: "가상화폐" },
    { key: "stock", label: "주식" },
    { key: "economy", label: "경제" },
  ];
  return (
    <div>
      <FilteringHeader
        keywords={keywords}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default NewsPage;
