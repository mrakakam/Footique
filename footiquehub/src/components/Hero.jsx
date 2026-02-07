import { useState } from "react";

import Heroimg1 from "../assets/images/image-product-1.jpg";
import Heroimg2 from "../assets/images/image-product-2.jpg";
import Heroimg3 from "../assets/images/image-product-3.jpg";
import Heroimg4 from "../assets/images/image-product-4.jpg";

import imageproduct1 from "../assets/images/image-product-1-thumbnail.jpg";
import imageproduct2 from "../assets/images/image-product-2-thumbnail.jpg";
import imageproduct3 from "../assets/images/image-product-3-thumbnail.jpg";
import imageproduct4 from "../assets/images/image-product-4-thumbnail.jpg";

import plusiconimg from "../assets/images/icon-plus.svg";
import minusiconimg from "../assets/images/icon-minus.svg";
import carticonimg from "../assets/images/icon-cart.svg";

const images = [Heroimg1, Heroimg2, Heroimg3, Heroimg4];

export const Hero = ({ setCartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex gap-60 px-24 py-16">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <img
            src={images[0]}
            alt="product"
            className="w-[420px] rounded-xl"
          />

          {/* THUMBNAILS */}
          <div className="flex gap-4">
            {[imageproduct1, imageproduct2, imageproduct3, imageproduct4].map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  className="w-20 rounded-lg cursor-pointer
                             hover:ring-2 hover:ring-orange-500"
                  onClick={() => openModal(index)}
                />
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start gap-12 max-w-md">
          <h3 className="text-gray-700 font-bold tracking-widest text-sm">
            SNEAKERS COMPANY
          </h3>

          <h1 className="text-4xl font-bold">
            Fall Limited Edition Sneakers
          </h1>

          <p className="text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole.
          </p>

          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">$125.00</h2>
            <span className="bg-black text-white px-3 py-1 rounded-md font-bold">
              50%
            </span>
          </div>

          <h3 className="text-gray-400 line-through">$250.00</h3>

          {/* CART ACTIONS */}
          <div className="flex gap-4 w-full">
            {/* PLUS / MINUS */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg w-36">
              <img
                src={minusiconimg}
                className="cursor-pointer"
                onClick={() => setQuantity((q) => Math.max(0, q - 1))}
              />

              <span className="font-bold">{quantity}</span>

              <img
                src={plusiconimg}
                className="cursor-pointer"
                onClick={() => setQuantity((q) => q + 1)}
              />
            </div>

            {/* ADD TO CART */}
            <button
              onClick={() => {
                if (quantity > 0) {
                  setCartCount((prev) => prev + quantity);
                  setQuantity(0);
                }
              }}
              className="flex items-center justify-center gap-3
                         bg-orange-500 text-black font-bold
                         px-6 py-3 rounded-lg w-full
                         hover:bg-orange-600 transition"
            >
              <img src={carticonimg} />
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* MODAL CONTENT */}
          <div className="relative z-50">
            {/* CLOSE */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-amber-600 text-3xl"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative">
              <img
                src={images[activeIndex]}
                className="w-[480px] rounded-xl"
              />

              {/* LEFT ARROW */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2
                           bg-white p-3 rounded-full"
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2
                           bg-white p-3 rounded-full"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
