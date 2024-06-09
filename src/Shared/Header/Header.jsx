import { AlignLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header bg-[#FFF3BC]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="menu-btn inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-inset transition-all duration-300 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X /> : <AlignLeft />}
            </button>
          </div>
          {/* Route's */}
          <div className="flex-1 flex items-center justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-5">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav-pending-color"
                      : isActive
                      ? "nav-active-color font-bold"
                      : "nav-pending-color"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/allProducts"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav-pending-color"
                      : isActive
                      ? "nav-active-color font-bold"
                      : "nav-pending-color"
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav-pending-color"
                      : isActive
                      ? "nav-active-color font-bold"
                      : "nav-pending-color"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav-pending-color"
                      : isActive
                      ? "nav-active-color font-bold"
                      : "nav-pending-color"
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className=" px-5">
            <h4>Welcome you to organic shop!</h4>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-3 space-y-5 menu">
          <hr />
          <div className=" flex items-center justify-between">
            <NavLink
              to="/allProducts"
              className={({ isActive, isPending }) =>
                isPending
                  ? "nav-pending-color"
                  : isActive
                  ? "nav-active-color font-bold"
                  : "nav-pending-color"
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
                  ? "nav-pending-color"
                  : isActive
                  ? "nav-active-color font-bold"
                  : "nav-pending-color"
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
                  ? "nav-pending-color"
                  : isActive
                  ? "nav-active-color font-bold"
                  : "nav-pending-color"
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
                  ? "nav-pending-color"
                  : isActive
                  ? "nav-active-color font-bold"
                  : "nav-pending-color"
              }
            >
              Contact
            </NavLink>
            <ChevronRight />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
