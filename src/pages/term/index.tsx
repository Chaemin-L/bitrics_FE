import DaliyTerm from "@/components/term/dailyTerm";
import TermSlideCard from "@/components/term/TermSlideCard";
import { terms } from "@/pages/term/data";
import AllTermCard from "@/components/term/AllTermCard";


const TermPage = () => {
  return (
    <div className="scrollbar-hide">
      <div className="mb-3">
        <h3 className="text-white text-xs font-semibold">용어카드를 눌러 뜻을 확인해보세요!
        </h3>
      </div>
      <div>
        <DaliyTerm />
      </div>
      <div className="mt-5">
        <TermSlideCard terms = { terms } />
      </div>
      <div className="mt-3">
        <AllTermCard />
      </div>
    </div>
  )
}

  export default TermPage;