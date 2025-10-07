import React from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';

const TrendingApps = ({ data }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h2 className="text-center font-bold text-4xl">Trending Apps</h2>
      <p className="text-center mt-1 text-gray-400 text-[16px]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-items-center">
        {data.map((card) => (
          <TrendingApp key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
