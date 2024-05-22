import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layouts = () => {
  return (
    <>
      <Header />
      <div className=" ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
