import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Header/Navbar";

const Layouts = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
