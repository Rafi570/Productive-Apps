import React, { useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import erroImg from "../../assets/App-Error.png";
import BChart from "../BChart/BChart";
import { addToStore, installBtn } from "../../Utility/Utility";
const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleinstallBtn = (id) => {
    addToStore(id);
    setIsInstalled(true);
  };
  const singleApp = data.find((app) => app.id === Number(id));
  const [isInstalled, setIsInstalled] = useState(singleApp ? installBtn(singleApp.id) : false);
  if (!singleApp) {
    return (
      <main className="flex flex-col items-center justify-center flex-grow bg-gray-100 text-center px-4 py-16 md:py-24 lg:py-32">
        <img
          src={erroImg}
          alt="Error"
          className="w-64 sm:w-80 md:w-96 lg:w-[500px] mb-6 md:mb-8"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Oops, page not found!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 md:mb-8">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold hover:opacity-90 transition"
        >
          Go Back
        </button>
      </main>
    );
  }
  return (
    <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-10 pt-16">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0">
          <img
            src={singleApp.image}
            alt={singleApp.title}
            className="w-full h-full object-contain rounded-xl border-2 border-gray-200"
          />
        </div>
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            {singleApp.title}
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            Developed by{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              {singleApp.companyName}
            </span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-10 text-center">
            <div>
              <span className="text-3xl sm:text-4xl">⬇️</span>
              <p className="font-bold text-xl sm:text-2xl">
                {(singleApp.downloads / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm sm:text-base text-gray-500">Downloads</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl">⭐</span>
              <p className="font-bold text-xl sm:text-2xl">
                {singleApp.ratingAvg}
              </p>
              <p className="text-sm sm:text-base text-gray-500">Avg. Rating</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl">💬</span>
              <p className="font-bold text-xl sm:text-2xl">
                {singleApp.reviews}
              </p>
              <p className="text-sm sm:text-base text-gray-500">Reviews</p>
            </div>
          </div>
          <button
            onClick={() => handleinstallBtn(singleApp.id)}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-lg sm:text-xl px-8 py-4 rounded-xl transition transform hover:scale-105"
          >
            {isInstalled ? "Installed" : `Install Now ${singleApp.size} MB`}
          </button>
        </div>
      </div>
      <div className="w-full">
        <BChart singleApp={singleApp.ratings} />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold">Description</h1>
      <p className="text-gray-600 text-lg sm:text-xl">
        {singleApp.description}
      </p>
    </div>
  );
};

export default AppDetails;
