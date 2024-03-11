import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import React from 'react';

interface Props {
  start: number;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  usersDataLoading: boolean;
}

const PaginationArrows = ({ start, setStart, usersDataLoading }: Props) => {
  return (
    <>
      <div className="flex items-center justify-end pb-4">
        {start === 0 && (
          <ChevronRightCircle
            size={40}
            className="cursor-pointer"
            color="white"
            fill=""
            onClick={() => {
              if (!usersDataLoading) {
                setStart(5);
              }
            }}
          />
        )}
      </div>
      <div className="flex items-center justify-start pb-4">
        {start === 5 && (
          <ChevronLeftCircle
            size={40}
            className="cursor-pointer"
            color="white"
            fill=""
            onClick={() => {
              if (!usersDataLoading) {
                setStart(0);
              }
            }}
          />
        )}
      </div>
    </>
  );
};

export default PaginationArrows;
