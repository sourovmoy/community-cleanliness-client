import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const HomeLayOut = () => {
  return (
    <div className="bg-base-100">
      <header className="">
        <Navbar />
      </header>
      <main>
        {/* <Container> */}
        <Outlet />
        {/* </Container> */}
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};

export default HomeLayOut;
