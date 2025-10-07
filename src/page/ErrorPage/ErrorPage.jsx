import React from "react";
import { useNavigate } from "react-router";
import erroImg from '../../assets/error-404.png';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

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

      <Footer />
    </div>
  );
};

export default ErrorPage;
