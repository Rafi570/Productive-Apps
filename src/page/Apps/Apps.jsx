import React, { useEffect, useState } from "react";
import DisplayAppsContainer from "../DisplayAppsContainer/DisplayAppsContainer";

const Apps = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="w-32 h-32 border-8 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <DisplayAppsContainer data={data}></DisplayAppsContainer>
      )}
    </div>
  );
};

export default Apps;
