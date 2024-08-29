import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

interface Props {
  keywords: { key: string; label: string }[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}
const FilteringHeader = (props: Props) => {
  const { keywords, selected, setSelected } = props;

  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {keywords.map((keyword) => (
        <div
          key={keyword.key}
          className={clsx(
            `rounded-[20px] w-fit  px-4 py-2 shadow-sm  text-sm cursor-pointer  font-bold   `,
            keyword.key === selected
              ? "from-purple-400 via-[#421074] to-[#360D5F] bg-gradient-to-b text-white"
              : "text-contrast-300 bg-purple-500"
          )}
          onClick={() => setSelected(keyword.key)}
        >
          {keyword.label}
        </div>
      ))}
    </div>
  );
};

export default FilteringHeader;
