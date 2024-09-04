import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { IKeyword } from "@/pages/news";

interface Props {
  keywords: { key: string; label: string }[];
  selected: IKeyword;
  setSelected: Dispatch<SetStateAction<IKeyword>>;
}
const FilteringHeader = (props: Props) => {
  const { keywords, selected, setSelected } = props;

  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {keywords.map((keyword) => (
        <div
          key={keyword.key}
          className={clsx(
            `rounded-[20px] w-fit  px-4 py-2 shadow-sm  text-sm cursor-pointer  font-bold  transition-colors select-none`,
            keyword.key === selected.key
              ? "bg-purple-300 text-white"
              : "text-contrast-300 bg-purple-500 hover:bg-purple-400 "
          )}
          onClick={() => setSelected(keyword)}
        >
          {keyword.label}
        </div>
      ))}
    </div>
  );
};

export default FilteringHeader;
