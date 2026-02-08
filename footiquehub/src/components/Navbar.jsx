import { useState } from "react";
import imageavatar from "../assets/images/image-avatar.png";
import cartimg from "../assets/images/icon-cart.svg";
import { Cart } from "./Cart";

export const Navbar = ({ cartCount }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-10 py-4 border-b border-gray-200">

      <h2 className="text-2xl font-extrabold">sneakers</h2>

      <ul className="flex gap-8">
        {["Collections", "Men", "Women", "About", "Contact"].map((item) => (
          <li
            key={item}
            className="
              relative cursor-pointer
              text-gray-500 hover:text-black
              after:absolute after:left-0 after:-bottom-2
              after:h-[4px] after:w-0
              after:bg-orange-500
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {item}
          </li>
        ))}
      </ul>

      {/* CART + AVATAR */}
      <div className="flex items-center gap-6">

        {/* CART WRAPPER (IMPORTANT FIX) */}
        <div
          className="relative"
          onMouseEnter={() => setShowCart(true)}
          onMouseLeave={() => setShowCart(false)}
        >
          {/* CART ICON */}
          <img src={cartimg} className="w-5 cursor-pointer" />

          {/* ORANGE COUNT */}
          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-3
                         bg-orange-500 text-white
                         text-xs font-bold px-2 rounded-full"
            >
              {cartCount}
            </span>
          )}

          {/* CART DROPDOWN */}
          {showCart && <Cart cartCount={cartCount} />}
        </div>

        {/* AVATAR */}
        <img
          src={imageavatar}
          className="w-9 rounded-full cursor-pointer
                     hover:ring-2 hover:ring-orange-500"
        />
      </div>
    </nav>
  );
};
