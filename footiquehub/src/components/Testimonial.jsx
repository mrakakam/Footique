export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Fashion Enthusiast",
      text: "These sneakers are amazing! Comfortable, stylish, and perfect for daily wear.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Athlete",
      text: "I love the grip and support. They make training sessions so much better.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Sneaker Collector",
      text: "The design and quality are top-notch. Definitely adding more to my collection.",
    },
  ]

  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Customer Name & Role */}
            <div className="mb-4">
              <h4 className="font-bold text-lg">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed">{t.text}</p>

            {/* Optional 5-star rating */}
            <div className="flex mt-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
