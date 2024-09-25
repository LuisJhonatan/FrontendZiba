import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "./UI/input";
import { Label } from "./UI/label";

interface InputSearchProps {
  label?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  placeholder?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({
  label,
  register,
  errorMessage,
  placeholder = "Buscar...",
}) => {
  return (
    <div className="">
      {label && <Label>{label}</Label>}
      <div className="relative">
        <Input
          register={register}
          type="text"
          placeholder={placeholder}
          errorMessage={errorMessage}
        />

        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center mr-3 text-sm text-gray-600"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
