import { useState } from "react";
import productThumb from "../assets/images/image-product-1-thumbnail.jpg";

export const Cart = ({ cartCount }) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className="absolute right-0 top-12 w-80
                 bg-white rounded-xl shadow-xl
                 border border-gray-200 z-50"
    >
      {/* HEADER */}
      <div className="border-b px-5 py-4 font-bold">
        Cart
      </div>

      {/* BODY */}
      <div className="p-5">
        {cartCount === 0 ? (
          <p className="text-center text-gray-500 font-semibold py-8">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <img
                src={productThumb}
                alt="product"
                className="w-12 rounded-md"
              />

              <div className="text-gray-500 text-sm">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 × {cartCount}{" "}
                  <span className="font-bold text-black">
                    ${125 * cartCount}.00
                  </span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMessage(true)}
              className="mt-6 w-full bg-orange-500
                         text-black font-bold py-3
                         rounded-lg hover:bg-orange-600 transition"
            >
              Checkout
            </button>

            {showMessage && (
              <p className="mt-4 text-center text-sm text-gray-600">
                This is a demo e-commerce site, but I can build a working one for you.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
