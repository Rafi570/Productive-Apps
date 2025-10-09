import React, { useEffect } from 'react';
// import { removeLocalData, getStoreDb } from '../../Utility/Utility';

const InstallCard = ({ app, onUninstall }) => {
  // useEffect(()=>{window.scrollTo(0,0)},[])


  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start mt-5 bg-white rounded-2xl shadow-md p-4 sm:p-6 gap-4 sm:gap-6 w-full mx-auto">
      <div className="h-20 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 border-gray-200">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between items-center sm:items-start w-full gap-2 sm:gap-4">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-bold">{app.title}</h2>
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-1 text-sm text-gray-600">
            <span className="flex items-center gap-1 text-green-600">
              ⬇️ {app.downloads}M
            </span>
            <span className="flex items-center gap-1 text-yellow-500">
              ⭐ {app.ratingAvg}
            </span>
            <span>{app.size} MB</span>
          </div>
        </div>

        <button
          onClick={() => onUninstall(app.id)}
          className="px-6 py-2 rounded-lg font-semibold text-white btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallCard;
