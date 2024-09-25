"use client";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../UI/input";

interface SearchFormData {
  search: string;
}

const SearchForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm<SearchFormData>();

  const handleSearchSubmit = (data: SearchFormData) => {
    console.log("Search Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(handleSearchSubmit)}>
      <div className="relative">
        <Input
          type="text"
          register={register("search")}
          className="rounded-md border-gray-300 hover:border-gray-400 focus:border-gray-400 px-2 py-2 sm:w-36 md:w-56 lg:w-80 xl:w-96 2xl:w-[420px]"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center mr-3 text-sm text-gray-600"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
