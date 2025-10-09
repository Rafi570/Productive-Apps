import React from 'react';
import { useNavigate } from 'react-router';

const DataFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-50">
      <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
        <svg
          className="w-24 h-24 mx-auto mb-4 text-purple-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          Oops! No Data Found
        </h1>
        <p className="text-gray-500 mb-4">
          We couldn't find any apps matching your search. Try adjusting your search terms.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 mt-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DataFound;
