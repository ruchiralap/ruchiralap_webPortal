import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layouts = () => {
  return (
    <>
      <Header />
      <div className=" min-h-screen w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layouts;
