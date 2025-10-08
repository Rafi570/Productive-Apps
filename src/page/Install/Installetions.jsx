import React, { useEffect, useState } from "react";
import InstallCard from "../InstallCard/InstallCard";
import { useLoaderData } from "react-router";
import { getStoreDb, removeLocalData } from "../../Utility/Utility";

const Installations = () => {
  const data = useLoaderData();
  const [installList, setInstallList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storeAppData = getStoreDb();
    const convertStoreData = storeAppData.map((id) => parseInt(id));

    const myAppList = data.filter((app) =>
      convertStoreData.includes(parseInt(app.id))
    );

    setInstallList(myAppList);
  }, [data]);

  const handleUninstall = (id) => {
    removeLocalData(id);
    setInstallList((prev) => prev.filter((app) => app.id !== id));
  };

  const handleSort = (type) => {
    setSort(type);
    if (type === "downloads") {
      const sortedByDownload = [...installList].sort(
        (a, b) => b.downloads - a.downloads 
      );
      setInstallList(sortedByDownload);
    }
    if (type === "ratingAvg") {
      const sortedByRating = [...installList].sort(
        (a, b) => b.ratingAvg - a.ratingAvg 
      );
      setInstallList(sortedByRating);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4 sm:p-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <p className="font-bold text-2xl sm:text-4xl">
          ({installList.length}) Apps Found
        </p>

        
<div className="dropdown dropdown-end w-full sm:w-auto">
  <button tabIndex={0} className="btn w-full sm:w-auto">
    Sort by: {sort ? sort : "Select"}
  </button>
  <ul
    tabIndex={0}
    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full sm:w-52 mt-1"
  >
    <li>
      <button onClick={() => handleSort("ratingAvg")}>Average Ratings</button>
    </li>
    <li>
      <button onClick={() => handleSort("downloads")}>Downloads</button>
    </li>
  </ul>
</div>


      </div>

      <div className="flex flex-col gap-4">
        {installList.map((app) => (
          <InstallCard key={app.id} app={app} onUninstall={handleUninstall} />
        ))}
      </div>
    </div>
  );
};

export default Installations;
