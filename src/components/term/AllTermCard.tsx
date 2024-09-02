import { terms } from "@/pages/term/data";
import TermCard from "@/components/term/TermCard";



const AllTermCard: React.FC = () => {
  return (
    <div className="flex flex-wrap p-2">
      {terms.map((terms, index) => (
        <div key={index}>
          <TermCard key={index} term={terms.term} />
        </div>
      ))}
    </div>
  );
};

export default AllTermCard;