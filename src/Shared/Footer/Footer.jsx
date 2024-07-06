import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <section className="bg-[#201700] px-5 md:px-10 py-20 grid grid-cols-1 md:grid-cols-7 gap-5 mt-20">
        <div className=" col-span-full md:col-span-3">
          <div className="">
            <Link to="/">
              <div className="relative h-20">
                <img
                  className=" absolute -top-[90px] -left-[40px] w-80"
                  src={logo}
                  alt="website logo image"
                />
              </div>
            </Link>
            <p className=" text-sm text-slate-300 mt-10">
              Welcome to Ruchir Alap, your go-to destination for online
              shopping! Discover the latest trends and timeless classics in
              fashion, electronics, home essentials, and more.
            </p>
          </div>
          <div className=" flex items-center gap-4 mt-10">
            <Facebook className=" bg-sky-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
            <Twitter className=" bg-sky-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
            <Youtube className=" bg-red-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
            <Linkedin className=" bg-sky-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 col-span-full lg:col-span-4">
          <div className=" menu space-y-1 font-medium">
            <h6 className=" text-2xl text-[#FCFCFC] font-semibold mb-2">
              Services
            </h6>
            <Link to="/allProducts">
              <a className="link link-hover hover:text-green-500 text-slate-300">
                Browse Products
              </a>
            </Link>
            <Link to="/about">
              <a className="link link-hover hover:text-green-500 text-slate-300">
                About us
              </a>
            </Link>

            <Link to="/contact">
              <a className="link link-hover hover:text-green-500 text-slate-300">
                Contact us
              </a>
            </Link>
          </div>
          <div>
            <h6 className="text-2xl text-[#FCFCFC] font-semibold mb-1">
              Newsletter
            </h6>
            <p className=" text-gray-200">
              cultivating the soil, growing crops.
            </p>
            <section className=" mt-5 flex items-center justify-start">
              <div>
                <input
                  className=" focus:outline-none border-none bg-[#FFFBE8] rounded-l-md px-5 py-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="exapmle@gmail.com"
                />
              </div>
              <div>
                <button className=" py-[7px] px-3 border rounded-r-md border-[#FFFBE8] text-[#FFFBE8]">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
      <footer className="footer footer-center p-4 bg-[#201700] text-[#FCFCFC] border-t-2 border-dashed border-[#4B4512]">
        <aside>
          <p>Copyright © 2024 - All right reserved by LBS Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
