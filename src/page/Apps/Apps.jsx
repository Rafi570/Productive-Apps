import React, { useEffect, useState } from "react";
import DisplayAppsContainer from "../DisplayAppsContainer/DisplayAppsContainer";

const Apps = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const trim = search.trim().toLocaleLowerCase();

  const handleChange = (val) => {
    setSearch(val);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const searchApp = trim
    ? data.filter((dt) => dt.title.toLocaleLowerCase().includes(trim))
    : data;

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      });
  }, []);

  return (
    <DisplayAppsContainer
      handleChange={handleChange}
      searchApp={searchApp}
      search={search}
      setSearch={setSearch}
      loading={loading}
    />
  );
};

export default Apps;
