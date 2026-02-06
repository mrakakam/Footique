import { useState } from "react"
import Heroimg1 from "../assets/images/image-product-1.jpg"
import Heroimg2 from "../assets/images/image-product-2.jpg"
import Heroimg3 from "../assets/images/image-product-3.jpg"
import Heroimg4 from "../assets/images/image-product-4.jpg"

import imageproduct1 from "../assets/images/image-product-1-thumbnail.jpg"
import imageproduct2 from "../assets/images/image-product-2-thumbnail.jpg"
import imageproduct3 from "../assets/images/image-product-3-thumbnail.jpg"
import imageproduct4 from "../assets/images/image-product-4-thumbnail.jpg"

import plusiconimg from "../assets/images/icon-plus.svg"
import minusiconimg from "../assets/images/icon-minus.svg"
import carticonimg from "../assets/images/icon-cart.svg"

const images = [Heroimg1, Heroimg2, Heroimg3, Heroimg4]

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openModal = (index) => {
    setActiveIndex(index)
    setIsOpen(true)
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-row gap-60 px-24 py-16">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <img src={Heroimg1} alt="" className="w-[420px] rounded-xl" />

          {/* THUMBNAILS */}
          <div className="flex gap-4">
            <img
              src={imageproduct1}
              className="w-20 rounded-lg cursor-pointer"
              onClick={() => openModal(0)}
            />
            <img
              src={imageproduct2}
              className="w-20 rounded-lg cursor-pointer"
              onClick={() => openModal(1)}
            />
            <img
              src={imageproduct3}
              className="w-20 rounded-lg cursor-pointer"
              onClick={() => openModal(2)}
            />
            <img
              src={imageproduct4}
              className="w-20 rounded-lg cursor-pointer"
              onClick={() => openModal(3)}
            />
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

          <div className="flex gap-4 w-full">
            <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg w-36">
              <img src={minusiconimg} />
              <span className="font-bold">0</span>
              <img src={plusiconimg} />
            </div>

            <button className="flex items-center justify-center gap-3 bg-orange-500 text-black font-bold px-6 py-3 rounded-lg w-full">
              <img src={carticonimg} />
              Add to cart
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* BLURRED BACKGROUND */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* MODAL CONTENT */}
          <div className="relative z-50">
            {/* CLOSE ICON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              <i className=" text-amber-600 bi bi-x-lg"></i>
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
              >
                <i className="bi bi-chevron-left text-xl"></i>
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
              >
                <i className="bi bi-chevron-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
