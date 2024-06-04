import { AlignLeft, ChevronRight, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-[#ece7d4a8] bg-gradient-to-r from-[#ece7d4a8] via-[#fff0b3]
     to-[#ece7d4a8] text-black font-roboto"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between text-xl  h-40">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X /> : <AlignLeft />}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-5">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-red-300"
                      : isActive
                      ? "text-slate-900 font-bold"
                      : "text-slate-900"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/allProducts"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-red-300"
                      : isActive
                      ? "text-slate-900 font-bold"
                      : "text-slate-900"
                  }
                >
                  All Products
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-red-300"
                      : isActive
                      ? "text-slate-900 font-bold"
                      : "text-slate-900"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-red-300"
                      : isActive
                      ? "text-slate-900 font-bold"
                      : "text-slate-900"
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex md:items-center md:justify-start absolute  transform md:-translate-x-1/2 ml-11">
            <Link to="/">
              <img
                className="w-1/2"
                src="https://i.ibb.co/Xjnjnhh/rucir-alaplogo-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="md:ml-4 p-1 rounded-full text-gray-400 hover:text-white">
              <span className="sr-only">View Cart</span>
              <ShoppingCart className="text-[#201700] " />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="px-4 pt-2 pb-3 space-y-5 menu"
        >
          <hr />
          <div className=" flex items-center justify-between">
            <NavLink
              to="/allProducts"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-red-300"
                  : isActive
                  ? "text-slate-900 font-bold"
                  : "text-slate-900"
              }
            >
              All Products
            </NavLink>
            <ChevronRight />
          </div>
          <hr />
          <div className=" flex items-center justify-between">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-red-300"
                  : isActive
                  ? "text-slate-900 font-bold"
                  : "text-slate-900"
              }
            >
              Home
            </NavLink>
            <ChevronRight />
          </div>

          <hr />
          <div className=" flex items-center justify-between">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-red-300"
                  : isActive
                  ? "text-slate-900 font-bold"
                  : "text-slate-900"
              }
            >
              About
            </NavLink>
            <ChevronRight />
          </div>
          <hr />
          <div className=" flex items-center justify-between">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-red-300"
                  : isActive
                  ? "text-slate-900 font-bold"
                  : "text-slate-900"
              }
            >
              Contact
            </NavLink>
            <ChevronRight />
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Header;
