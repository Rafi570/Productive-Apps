import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import erroImg from "../../assets/App-Error.png";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  const singleApp = data.find((app) => app.id === Number(id));

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
    <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start pt-10">
      <div className="w-28 h-28 flex-shrink-0">
        <img
          src={singleApp.image}
          alt={singleApp.title}
          className="w-full h-full object-contain rounded-lg border"
        />
      </div>
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-2xl font-bold">{singleApp.title}</h1>
        <p className="text-gray-500 text-sm">
          Developed by{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            {singleApp.companyName}
          </span>
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-8 text-center">
          <div>
            <span className="text-2xl">⬇️</span>
            <p className="font-bold text-lg">
              {(singleApp.downloads / 1000000).toFixed(1)}M
            </p>
            <p className="text-sm text-gray-500">Downloads</p>
          </div>
          <div>
            <span className="text-2xl">⭐</span>
            <p className="font-bold text-lg">{singleApp.ratingAvg}</p>
            <p className="text-sm text-gray-500">Avg. Rating</p>
          </div>
          <div>
            <span className="text-2xl">💬</span>
            <p className="font-bold text-lg">{singleApp.reviews}</p>
            <p className="text-sm text-gray-500">Reviews</p>
          </div>
        </div>
        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition">
          Install Now ({singleApp.size} MB)
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
