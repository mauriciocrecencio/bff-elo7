import React from 'react';

import { cn } from '@/lib/utils';

export type PaginationProps = {
  pageAmount: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

const handleZero = (pageNumber: number) => {
  if (pageNumber < 10 && pageNumber > 0) {
    return pageNumber;
  }
  return pageNumber;
};

const Pagination = React.forwardRef<HTMLButtonElement, PaginationProps>(
  ({ pageAmount, currentPage, onPageChange, ...props }, ref) => {
    return (
      <div className="m-auto mt-10 flex w-fit justify-end overflow-hidden rounded-lg border border-gray-50">
        <ol className="flex items-center gap-x-1">
          {Array.from({ length: pageAmount }, (_, i) => i + 1).map((page) => {
            return (
              <li key={page}>
                <button
                  className={cn(
                    'flex min-h-[38px] min-w-[38px] items-center justify-center px-3 py-2 text-xl text-gray-500 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                    {
                      'text-aqua': page === currentPage
                    }
                  )}
                  onClick={() => onPageChange(page)}
                  {...props}
                  ref={ref}
                >
                  <h1>{handleZero(page)}</h1>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
);

export default Pagination;
