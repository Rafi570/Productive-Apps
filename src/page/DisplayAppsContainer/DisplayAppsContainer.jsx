import React from "react";
import TrendingApp from "../TrendingApp/TrendingApp";
import { Search } from "lucide-react";

const DisplayAppsContainer = ({  handleChange,setSearch, search, searchApp }) => {
  // console.log(search)

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h2 className="text-center font-bold text-4xl">Our All Applications</h2>
      <p className="text-center mt-1 text-gray-400 text-[16px]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center">
        <h1 className="text-[rgba(0,25,49,1)] font-inter text-2xl font-semibold leading-8 tracking-normal">
          (<span>{searchApp.length}</span>) Apps Found
        </h1>
        <div>
          <input

            value={search}
            autoFocus  
            type="search"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search"
            className="input input-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center">
        {searchApp.map((card) => (
          <TrendingApp
          handleChange={handleChange}
           key={card.id} 
           card={card}
          search={search} />
        ))}
      </div>
    </div>
  );
};

export default DisplayAppsContainer;
