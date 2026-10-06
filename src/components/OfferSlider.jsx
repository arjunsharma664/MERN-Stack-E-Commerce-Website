import { useEffect, useState } from "react";

const offers = [
  "/offers/offer1.jpg",
  "/offers/offer2.jpg",
  "/offers/offer3.jpg",
  "/offers/offer4.jpg",
  "/offers/offer5.jpg",
  "/offers/offer6.jpg",
];

function OfferSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  // Previous slide
  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + offers.length) % offers.length
    );
  };

  return (
    <section className="w-full bg-gray-50 px-6 py-16 lg:px-10">

      <div className="mx-auto max-w-350">

        {/* Heading */}
        <div className="mb-10 text-center">

          <p className="mb-2 text-sm font-bold tracking-[4px] text-pink-500">
            EXCLUSIVE DEALS
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900">
            Best Offers
          </h2>

        </div>

        {/* Slider */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous offers"
            className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-gray-700 shadow-lg transition hover:scale-110 hover:text-pink-500 lg:-left-6"
          >
            ❮
          </button>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            {[0, 1, 2].map((position) => {
              const index =
                (currentIndex + position) % offers.length;

              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={offers[index]}
                    alt={`Offer ${index + 1}`}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 md:h-72"
                  />
                </div>
              );
            })}

          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next offers"
            className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-gray-700 shadow-lg transition hover:scale-110 hover:text-pink-500 lg:-right-6"
          >
            ❯
          </button>

        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">

          {offers.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to offer ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-pink-500"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default OfferSlider;