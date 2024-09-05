interface TermCardProps {
  term: string;
}

const TermCard: React.FC<TermCardProps> = ({ term }) => {
  return (
    <div className="bg-purple-600 flex flex-col justify-center text-white text-center p-1 rounded-md m-0.5 w-[90px] h-[90px] cursor-pointer">
      <p className="text-xs mb-2 whitespace-normal word-wrap: break-word">{term}</p>
    </div>
  );
};

export default TermCard; 