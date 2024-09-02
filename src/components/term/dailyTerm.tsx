import { useState, useEffect } from 'react';
import { terms } from '@/pages/term/data';

const DailyTerm : React.FC = () => {
  const [currentTerm, setCurrentTerm] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random()*terms.length);
    setCurrentTerm(randomIndex);}, []);
    
    return (
      <div className="flex items-center justify-center">
        <div className="bg-purple-500 text-white p-4 rounded-lg w-80 h-44">
          <h2 className="text-base font-semibold mb-6">오늘의 용어</h2>
          <h3 className="text-sm text-center font-semibold mb-4">{terms[currentTerm].term}</h3>
          <p className="text-xs text-center">{terms[currentTerm].description}</p>
        </div>
      </div>
    );
  };  

export default DailyTerm;