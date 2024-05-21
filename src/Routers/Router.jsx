import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Components/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AllProducts from "../Pages/AllProducts/AllProducts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
