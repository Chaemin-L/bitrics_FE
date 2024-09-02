import React, { useRef, useState, useEffect } from 'react';

interface TermSlideCard {
  term : string
  description: string
}

interface TermSlideCardProps {
  terms: TermSlideCard[];
}

const TermSlideCard: React.FC<TermSlideCardProps> = ({ terms }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setSelectedTerm(null);
        setSelectedDescription(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cardRef]);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="overflow-hidden whitespace-nowrap w-full cursor-grab select-none -mx-[30px]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className="inline-flex space-x-[10px]">
          {terms.map((terms, index) => (
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

      {selectedTerm ? (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div ref={cardRef} className="w-80 h-[400px] p-45 bg-purple-200 rounded-lg text-white text-center">
            <p className='mt-[150px] ml-[20px] mr-[20px]'>{selectedDescription}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TermSlideCard;