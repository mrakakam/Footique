export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">sneakers</h3>
          <p className="text-gray-400 max-w-xs">
            Your one-stop shop for stylish and comfortable sneakers. Quality and style you can trust.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-12">
          <ul className="flex flex-col gap-2">
            <li className="hover:text-orange-500 cursor-pointer">Collections</li>
            <li className="hover:text-orange-500 cursor-pointer">Men</li>
            <li className="hover:text-orange-500 cursor-pointer">Women</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="hover:text-orange-500 cursor-pointer">FAQs</li>
            <li className="hover:text-orange-500 cursor-pointer">Support</li>
            <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-500 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Social / contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Follow Us</h4>
          <div className="flex gap-4 text-gray-400">
            <span className="hover:text-orange-500 cursor-pointer">Facebook</span>
            <span className="hover:text-orange-500 cursor-pointer">Twitter</span>
            <span className="hover:text-orange-500 cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-gray-500 text-sm text-center mt-12">
        &copy; {new Date().getFullYear()} Sneakers. All rights reserved.
      </div>
    </footer>
  )
}
