import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-300 via-red-200 to-green-300 hover:cursor-pointer w-full">
        <h3 className=" text-xl font-medium text-center py-2 text-slate-600 ">
          Back to top
        </h3>
      </div>
      <hr />
      <section className="bg-gradient-to-r from-green-300 via-red-200 to-green-300 p-10 grid grid-cols-1 md:grid-cols-7 gap-5">
        <div className=" col-span-full md:col-span-3">
          <div className="">
            <Link to="/">
              <h3 className=" md:text-4xl font-mono bg-flag mr-20">
                Ruchir <span className=" text-red-500">Alap</span>
              </h3>
            </Link>
            <p className=" text-sm text-slate-600 mt-2">
              Welcome to Ruchir Alap, your go-to destination for online
              shopping! Discover the latest trends and timeless classics in
              fashion, electronics, home essentials, and more.
            </p>
          </div>
          <div className=" flex items-center gap-4 mt-5">
            <Facebook className=" bg-sky-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
            <Twitter className=" bg-sky-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
            <Youtube className=" bg-red-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
            <Linkedin className=" bg-sky-500 text-white rounded-md p-1 hover:cursor-pointer footerIcons" />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 col-span-full md:col-span-4">
          <div className=" menu space-y-1 font-medium">
            <h6 className="footer-title">Services</h6>
            <Link to="/bestSell">
              <a className="link link-hover hover:text-green-500">Best Sell</a>
            </Link>
            <Link to="/about">
              <a className="link link-hover hover:text-green-500">About us</a>
            </Link>

            <Link to="/contact">
              <a className="link link-hover hover:text-green-500">Contact us</a>
            </Link>
          </div>
          <div>
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className=" border-none input focus:outline-none join-item"
                  />
                  <button className="btn bg-gradient-to-r from-green-700 via-red-600 to-green-700 join-item border-none text-slate-50">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <hr />
      <footer className="footer footer-center p-4 bg-gradient-to-r from-green-300 via-red-200 to-green-300  text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by LBS Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
