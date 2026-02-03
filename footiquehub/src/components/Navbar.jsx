import imageavatar from "../assets/images/image-avatar.png";
import cartimg from "../assets/images/icon-cart.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-200">

      {/* LOGO */}
      <h2 className="text-2xl font-extrabold">sneakers</h2>

      {/* NAV LINKS */}
      <ul className="flex gap-6 text-sm text-gray-500">
        {["Collections", "Men", "Women", "About", "Contact"].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer pb-2
                       hover:text-black
                       after:absolute after:left-0 after:-bottom-1
                       after:h-1 after:w-0 after:bg-orange-500
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* CART + AVATAR */}
      <div className="flex items-center gap-8">
        <img src={cartimg} alt="cart" className="w-5 cursor-pointer" />
        <img
          src={imageavatar}
          alt="avatar"
          className="w-9 rounded-full cursor-pointer hover:ring-2 hover:ring-orange-500"
        />
      </div>

    </nav>
  );
};