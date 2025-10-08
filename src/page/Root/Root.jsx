import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import AppError from "../AppError/AppError";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-50">
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
