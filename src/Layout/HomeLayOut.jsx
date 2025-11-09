import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";

const HomeLayOut = () => {
  return (
    <div className="bg-base-100">
      <header>
        <Navbar />
      </header>
      <Container>
        <Outlet />
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayOut;
