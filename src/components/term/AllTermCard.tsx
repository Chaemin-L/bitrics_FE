import { terms } from "@/pages/term/data";
import TermCard from "@/components/term/TermCard";
import TermDescriptionModal from "@/components/term/TermDescriptionModal";
import { useState } from "react"


const AllTermCard: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
  
  const handleCardClick = (term: string, description: string) => {
    setSelectedTerm(term);
    setSelectedDescription(description);
  };

  const handleCloseModal = () => {
    setSelectedTerm(null);
    setSelectedDescription(null);
  };

  return (
    <div>
      <div className="flex flex-wrap p-2 justify-center">
        {terms.map((terms, index) => (
          <div key={index} onClick={() => handleCardClick(terms.term, terms.description)}>
            <TermCard term={terms.term} />
          </div>
        ))}
      </div>

      {selectedTerm && selectedDescription && (
        <TermDescriptionModal
          term={selectedTerm}
          description={selectedDescription}
          onClose={handleCloseModal}
        />
    )}
  </div>
  );
};
export default AllTermCard;

