import React, { useEffect, useState } from "react";
import InstallCard from "../InstallCard/InstallCard";
import { useLoaderData } from "react-router";
import { getStoreDb, removeLocalData } from "../../Utility/Utility";
import Swal from "sweetalert2";

const Installations = () => {
  const data = useLoaderData();
  const [installList, setInstallList] = useState([]);

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
    Swal.fire({
      title: "Uninstalled Successfully",
      icon: "success",
      draggable: true,
    });
  };

  const handleSortHighToLow = (type) => {
    let sorted = [...installList];
    if (type === "downloads") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (type === "ratingAvg") {
      sorted.sort((a, b) => parseFloat(b.ratingAvg) - parseFloat(a.ratingAvg));
    }
    setInstallList(sorted);
  };


  const handleSortLowToHigh = (type) => {
    let sorted = [...installList];
    if (type === "downloads") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    } else if (type === "ratingAvg") {
      sorted.sort((a, b) => parseFloat(a.ratingAvg) - parseFloat(b.ratingAvg));
    }
    setInstallList(sorted);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4 sm:p-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <p className="font-bold text-2xl sm:text-4xl">
          ({installList.length}) Apps Found
        </p>

        <div className="dropdown dropdown-end w-full sm:w-auto">
          <button tabIndex={0} className="btn w-full sm:w-auto">
            Sort Options
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full sm:w-52 mt-1"
          >
            <li className="font-bold text-center">⭐ Rating</li>
            <li>
              <button onClick={() => handleSortHighToLow("ratingAvg")}>
                High to Low
              </button>
            </li>
            <li>
              <button onClick={() => handleSortLowToHigh("ratingAvg")}>
                Low to High
              </button>
            </li>
            <div className="divider my-1"></div>
            <li className="font-bold text-center">⬇️ Downloads</li>
            <li>
              <button onClick={() => handleSortHighToLow("downloads")}>
                High to Low
              </button>
            </li>
            <li>
              <button onClick={() => handleSortLowToHigh("downloads")}>
                Low to High
              </button>
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
