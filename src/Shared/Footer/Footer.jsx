import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-bg p-10 grid grid-cols-1 md:grid-cols-7 gap-5 mt-20">
        <div className=" col-span-full md:col-span-3">
          <div className="">
            <Link to="/">
              <h3 className=" md:text-5xl font-bold header-title mr-20">
                Ruchir <span>Alap</span>
              </h3>
            </Link>
            <p className="footer-description text-sm font-robot mt-2">
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
            <h6 className=" text-2xl header-title font-semibold">Services</h6>
            <Link to="/bestSell">
              <a className="nav-link">Best Sell</a>
            </Link>
            <Link to="/about">
              <a className="nav-link">About us</a>
            </Link>

            <Link to="/contact">
              <a className="nav-link">Contact us</a>
            </Link>
          </div>
          <div>
            <form>
              <h6 className="text-2xl header-title font-semibold">
                Newsletter
              </h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text footer-description">
                    Enter your email address
                  </span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className=" border input-border input join-item bg-transparent input-text"
                  />
                  <button className=" px-4 rounded-r-md font-medium border-none dynamic-btn">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <hr />
      <footer className="footer footer-center p-4 footer-bg footer-description">
        <aside>
          <p>Copyright © 2024 - All right reserved by LBS Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
