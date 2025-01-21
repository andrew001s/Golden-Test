import React from "react";
interface InputSearchProps {
  onSearch: (value: string) => void;
}
function InputSearch({ onSearch }: InputSearchProps) {
  const search = (value: string) => {
    onSearch(value);
  };

  return (
    <div>
      <div className="relative w-full mb-4">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search "
          onChange={(e) => search(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default InputSearch;
