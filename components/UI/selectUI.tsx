import { FC } from 'react';
import { ChevronDown } from 'lucide-react'; 
import { cva } from 'class-variance-authority';
import { SelectLogicProps } from '../Select';
import { cn } from '@/lib/utils';

const selectContainer = cva('relative text-sm min-w-40 sm:text-base sm:min-w-44 inline-block');

const selectButton = cva(
  'w-full text-left border border-gray-300 bg-white py-1 px-2 rounded-md shadow-sm flex justify-between items-center focus:outline-none transition-all duration-300',
  {
    variants: {
      open: {
        true: 'border-gray-600',
        false: 'border-gray-300',
      },
    },
    defaultVariants: {
      open: false,
    },
  }
);

const selectOptions = cva(
  'absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg transition-all duration-300 overflow-hidden',
  {
    variants: {
      open: {
        true: 'max-h-60 opacity-100',
        false: 'max-h-0 opacity-0',
      },
    },
    defaultVariants: {
      open: false,
    },
  }
);

export interface SelectUIProps extends SelectLogicProps {
  options: { label: string; value: string }[];
}

const SelectUI: FC<SelectUIProps> = ({ open, selectedOption, toggleSelect, options, selectOption }) => {
  return (
    <div className={selectContainer()}>
      <button
        className={cn(selectButton({ open }))}
        onClick={toggleSelect}
        type="button"
      >
        {selectedOption?.label || 'Ordenar por'}
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <div className={cn(selectOptions({ open }))}>
        {options.map((option) => (
          <div
            key={option.value}
            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            onClick={() => selectOption(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectUI;
