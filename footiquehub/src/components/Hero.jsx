import { useState } from "react"
import Heroimg1 from "../assets/images/image-product-1.jpg"
import imageproduct1 from "../assets/images/image-product-1-thumbnail.jpg"
import Heroimg2 from "../assets/images/image-product-2.jpg"
import imageproduct2 from "../assets/images/image-product-2-thumbnail.jpg"
import Heroimg3 from "../assets/images/image-product-3.jpg"
import imageproduct3 from "../assets/images/image-product-3-thumbnail.jpg"
import Heroimg4 from "../assets/images/image-product-4.jpg"
import imageproduct4 from "../assets/images/image-product-4-thumbnail.jpg"
import plusiconimg from "../assets/images/icon-plus.svg"
import minusiconimg from "../assets/images/icon-minus.svg"
import carticonimg from "../assets/images/icon-cart.svg"

const products = [
  { hero: Heroimg1, thumb: imageproduct1 },
  { hero: Heroimg2, thumb: imageproduct2 },
  { hero: Heroimg3, thumb: imageproduct3 },
  { hero: Heroimg4, thumb: imageproduct4 },
]

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  return (
    <section className="flex flex-row gap-20 px-24 py-16">
      {/* FIRST MAIN DIV */}
      <div className="flex flex-col gap-6">
        <div className="relative">
          <img
            src={products[currentIndex].hero}
            alt=""
            className="rounded-xl w-[420px]"
          />

          {/* Arrow button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
          >
            <i className="bi bi-chevron-right text-xl"></i>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4">
          {products.map((item, index) => (
            <img
              key={index}
              src={item.thumb}
              alt=""
              onClick={() => setCurrentIndex(index)}
              className={`w-20 rounded-lg cursor-pointer border-2 ${
                currentIndex === index
                  ? "border-orange-500 opacity-70"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* SECOND MAIN DIV */}
      <div className="flex flex-col items-start gap-6 max-w-md">
        <h3 className="text-orange-500 font-bold tracking-widest text-sm">
          SNEAKERS COMPANY
        </h3>

        <h1 className="text-4xl font-bold">
          Fall Limited Edition Sneakers
        </h1>

        <p className="text-gray-500 leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        {/* Price row */}
        <div className="flex flex-row items-center gap-4">
          <h2 className="text-3xl font-bold">$125.00</h2>
          <span className="bg-black text-white px-3 py-1 rounded-md font-bold">
            50%
          </span>
        </div>

        <h3 className="text-gray-400 line-through">$250.00</h3>

        {/* Quantity + Cart */}
        <div className="flex gap-4 w-full">
          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg w-36">
            <img src={minusiconimg} alt="" className="cursor-pointer" />
            <span className="font-bold">0</span>
            <img src={plusiconimg} alt="" className="cursor-pointer" />
          </div>

          <button className="flex items-center justify-center gap-3 bg-orange-500 text-black font-bold px-6 py-3 rounded-lg w-full hover:opacity-90">
            <img src={carticonimg} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
