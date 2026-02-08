export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12 md:px-8">
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col
          gap-12
          md:flex-row md:justify-between md:gap-8
        "
      >
        {/* BRAND */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">sneakers</h3>
          <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
            Your one-stop shop for stylish and comfortable sneakers.
            Quality and style you can trust.
          </p>
        </div>

        {/* LINKS */}
        <div
          className="
            flex flex-col
            gap-10
            text-center
            md:flex-row md:gap-12 md:text-left
          "
        >
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-500 cursor-pointer">Collections</li>
            <li className="hover:text-orange-500 cursor-pointer">Men</li>
            <li className="hover:text-orange-500 cursor-pointer">Women</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-500 cursor-pointer">FAQs</li>
            <li className="hover:text-orange-500 cursor-pointer">Support</li>
            <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-500 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-6 text-gray-400">
            <span className="hover:text-orange-500 cursor-pointer">Facebook</span>
            <span className="hover:text-orange-500 cursor-pointer">Twitter</span>
            <span className="hover:text-orange-500 cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-gray-500 text-sm text-center mt-12">
        &copy; {new Date().getFullYear()} Sneakers. All rights reserved.
      </div>
    </footer>
  );
};
