import { useState } from 'react';

export interface SelectLogicProps {
  open: boolean;
  selectedOption: { label: string; value: string } | null;
  toggleSelect: () => void;
  selectOption: (option: { label: string; value: string }) => void;
}

export const useSelectLogic = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>(null);

  const toggleSelect = () => setOpen(!open);

  const selectOption = (option: { label: string; value: string }) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return {
    open,
    selectedOption,
    toggleSelect,
    selectOption,
  };
};
