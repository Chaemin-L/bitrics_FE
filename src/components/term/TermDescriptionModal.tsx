import { useRef, useEffect } from 'react';

interface TermDescriptionModalProps {
  term: string;
  description: string;
  onClose: () => void;
}

const TermDescriptionModal: React.FC<TermDescriptionModalProps> = ({ term, description, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cardRef, onClose]);

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div ref={cardRef} className="w-80 h-[400px] p-45 bg-purple-200 rounded-lg text-white text-center flex flex-col justify-center">
        <h2 className="text-lg font-bold">{term}</h2>
        <p className='mt-4 ml-[20px] mr-[20px]'>{description}</p>
      </div>
    </div>
  );
};

export default TermDescriptionModal;
