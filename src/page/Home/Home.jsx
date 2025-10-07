import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import TrendingApps from '../../page/TrendingApps/TrendingApps';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/byHome.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>

      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="w-32 h-32 border-8 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <TrendingApps data={data}></TrendingApps>
      )}
    </div>
  );
};

export default Home;
