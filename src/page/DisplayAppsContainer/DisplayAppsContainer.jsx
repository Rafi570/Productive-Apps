import React from "react";
import TrendingApp from "../TrendingApp/TrendingApp";

const DisplayAppsContainer = ({ handleChange, search, searchApp, loading }) => {
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
            type="search"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search"
            className="input input-primary"
          />
        </div>
      </div>

      <div className="mt-8 min-h-[300px] flex justify-center items-center">
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="w-32 h-32 border-8 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        ) : searchApp.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-96">
            <p className="text-4xl font-bold text-gray-700 mb-2">Data Not Found</p>
            <p className="text-lg text-gray-400">Try searching something else!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full">
            {searchApp.map((card) => (
              <TrendingApp key={card.id} card={card} search={search} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayAppsContainer;
