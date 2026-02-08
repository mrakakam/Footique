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
      {/* HERO */}
      <section
        className="
          flex flex-col md:flex-row
          gap-12 md:gap-60
          px-6 md:px-24
          py-10 md:py-16
        "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <img
            src={images[0]}
            className="w-full md:w-[420px] rounded-xl"
          />

          {/* THUMBNAILS */}
          <div className="flex gap-3 md:gap-4">
            {[imageproduct1, imageproduct2, imageproduct3, imageproduct4].map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  className="
                    w-16 md:w-20
                    rounded-lg cursor-pointer
                    hover:ring-2 hover:ring-orange-500
                  "
                  onClick={() => openModal(index)}
                />
              )
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start gap-6 md:gap-10 max-w-md">
          <h3 className="text-gray-700 font-bold tracking-widest text-sm">
            SNEAKERS COMPANY
          </h3>

          <h1 className="text-3xl md:text-4xl font-bold">
            Fall Limited Edition Sneakers
          </h1>

          <p className="text-gray-500 text-sm md:text-base">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole.
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">$125.00</h2>
            <span className="bg-black text-white px-3 py-1 rounded-md font-bold">
              50%
            </span>
          </div>

          <h3 className="text-gray-400 line-through">$250.00</h3>

          {/* CART ACTIONS */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* QUANTITY */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg w-full md:w-36">
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
              className="
                flex items-center justify-center gap-3
                bg-orange-500 text-black font-bold
                px-6 py-3 rounded-lg w-full
                hover:bg-orange-600 transition
              "
            >
              <img src={carticonimg} />
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-orange-500 text-3xl"
            >
              ✕
            </button>

            <div className="relative">
              <img
                src={images[activeIndex]}
                className="w-[90vw] max-w-[480px] rounded-xl"
              />

              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2
                           bg-white p-3 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2
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
