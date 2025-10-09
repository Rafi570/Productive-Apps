import React, { useEffect, useState } from "react";
import DisplayAppsContainer from "../DisplayAppsContainer/DisplayAppsContainer";
const Apps = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const trim = search.trim().toLocaleLowerCase();
  const handleChange = (val) => {
    console.log(val);
    setSearch(val);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
  };

  const searchApp = trim
    ? data.filter((dt) => dt.title.toLocaleLowerCase().includes(trim))
    : data;
  // console.log(searchApp)
  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      });
  }, []);
  // console.log(data[0].title)
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="w-32 h-32 border-8 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <DisplayAppsContainer
          handleChange={handleChange}
          searchApp={searchApp}
          search={search}
          setSearch={setSearch}
          data={data}
        ></DisplayAppsContainer>
      )}
    </div>
  );
};

export default Apps;
