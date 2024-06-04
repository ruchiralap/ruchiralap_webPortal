import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Banner from "../Pages/Home/Banner/Banner";

const Layouts = () => {
  return (
    <>

      <div className=" overflow-hidden">
        <Header />
        <Outlet />
        <Footer />
      </div>

    </>
  );
};

export default Layouts;
