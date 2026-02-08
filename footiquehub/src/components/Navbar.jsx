import { useState } from "react";
import imageavatar from "../assets/images/image-avatar.png";
import cartimg from "../assets/images/icon-cart.svg";
import { Cart } from "./Cart";

export const Navbar = ({ cartCount }) => {
  const [showCart, setShowCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="relative z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* HAMBURGER (MOBILE) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <i className="bi bi-list"></i>
          </button>

          <h2 className="text-2xl font-extrabold">sneakers</h2>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8">
          {["Collections", "Men", "Women", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer text-gray-500 hover:text-black
                         after:absolute after:left-0 after:-bottom-2
                         after:h-[4px] after:w-0 after:bg-orange-500
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-6 relative">
          {/* CART ICON */}
          <div className="relative">
            <img
              src={cartimg}
              className="w-5 cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            />

            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-3
                           bg-orange-500 text-white
                           text-xs font-bold px-2 rounded-full"
              >
                {cartCount}
              </span>
            )}

            {/* DESKTOP CART DROPDOWN */}
            {showCart && (
              <div className="hidden md:block absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
                <Cart cartCount={cartCount} />
              </div>
            )}
          </div>

          {/* AVATAR */}
          <img
            src={imageavatar}
            className="w-8 md:w-9 rounded-full cursor-pointer
                       hover:ring-2 hover:ring-orange-500"
          />
        </div>
      </div>

      {/* MOBILE MENU - SLIDE FROM LEFT */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50
                    transform transition-transform duration-300
                    ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
                    md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl"
            onClick={() => setMobileMenu(false)}
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 mt-6 font-bold">
          {["Collections", "Men", "Women", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-orange-500"
              onClick={() => setMobileMenu(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE CART DROPDOWN CENTERED */}
      {showCart && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-center items-start pt-24">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setShowCart(false)}
          />
          <div className="relative z-50 w-80">
            <Cart cartCount={cartCount} />
          </div>
        </div>
      )}
    </nav>
  );
};
