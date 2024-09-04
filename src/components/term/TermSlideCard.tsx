import React, { useRef, useState,useEffect } from 'react';
import TermDescriptionModal from '@/components/term/TermDescriptionModal'

interface TermSlideCard {
  term : string
  description: string
}

interface TermSlideCardProps {
  terms: TermSlideCard[];
}

const TermSlideCard: React.FC<TermSlideCardProps> = ({ terms }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
  const [shuffledTerms, setShuffledTerms] = useState<TermSlideCard[]>([]);

  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - scrollContainerRef.current!.offsetLeft;
    scrollLeft = scrollContainerRef.current!.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조정
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (term: string, description: string) => {
    setSelectedTerm(term);
    setSelectedDescription(description);
  };

  const handleCloseModal = () => {
    setSelectedTerm(null);
    setSelectedDescription(null);
  }

  useEffect(() => {
    const shuffleArray = (array: TermSlideCard[]) => {
      const shuffled = [...array];
      for(let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledTerms(shuffleArray(terms));
  }, [terms]);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide whitespace-nowrap cursor-grab select-none -mx-[30px]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className="inline-flex space-x-[10px]">
          {shuffledTerms.slice(0, 5).map((terms, index) => (
            <div
              key={index}
              className="bg-purple-600 text-white p-10 rounded-[10px] min-w-[200px] text-center"
              onClick={() => handleCardClick(terms.term, terms.description)}
            >
              <div className="text-sm font-medium">{terms.term}</div>
              </div>
          ))}
        </div>
      </div>

      {selectedTerm && selectedDescription && (
        <TermDescriptionModal
          term={selectedTerm}
          description={selectedDescription}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default TermSlideCard;