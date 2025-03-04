import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="py-10 md:p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
        Browse All Templates
      </h2>
      <p className="text-md text-white font-medium pt-4 text-center">
        What Would you like to Create Today?
      </p>

      <div className="w-full flex justify-center">
        <div className="flex items-center gap-2 p-2 border rounded-md bg-white my-5 md:w-[40%]">
          <Search className="text-indigo-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
