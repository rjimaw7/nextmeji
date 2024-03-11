import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import React from 'react';

interface Props {
  start: number;
  setStart: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationArrows = ({ start, setStart }: Props) => {
  return (
    <>
      <div className="flex items-center justify-end pb-4">
        {start === 0 && (
          <ChevronRightCircle size={40} className="cursor-pointer" color="white" fill="" onClick={() => setStart(5)} />
        )}
      </div>
      <div className="flex items-center justify-start pb-4">
        {start === 5 && (
          <ChevronLeftCircle size={40} className="cursor-pointer" color="white" fill="" onClick={() => setStart(0)} />
        )}
      </div>
    </>
  );
};

export default PaginationArrows;
