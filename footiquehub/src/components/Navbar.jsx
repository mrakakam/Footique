import imageavatar from "../assets/images/image-avatar.png";
import cartimg from "../assets/images/icon-cart.svg";

export const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-200">

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
        <div className="relative">
          <img src={cartimg} className="w-5 cursor-pointer" />

          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-3
                         bg-orange-500 text-white
                         text-xs font-bold px-2 rounded-full"
            >
              {cartCount}
            </span>
          )}
        </div>

        <img
          src={imageavatar}
          className="w-9 rounded-full cursor-pointer
                     hover:ring-2 hover:ring-orange-500"
        />
      </div>
    </nav>
  );
};
