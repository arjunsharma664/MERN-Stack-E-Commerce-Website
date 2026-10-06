import { useEffect, useState } from "react";

const slides = [
  {
    image: "/offers/offer1.jpg",
    tag: "NEW SEASON COLLECTION",
    title: "Trendy Fashion",
    highlight: "For Every You",
    description:
      "Explore the latest styles, top brands and exclusive deals all in one place.",
    discount: "50% OFF",
  },
  {
    image: "/offers/offer2.jpg",
    tag: "MEN'S COLLECTION",
    title: "Style That",
    highlight: "Speaks For You",
    description:
      "Discover premium men's fashion at amazing prices.",
    discount: "60% OFF",
  },
  {
    image: "/offers/offer3.jpg",
    tag: "FOOTWEAR COLLECTION",
    title: "Step Into",
    highlight: "New Style",
    description:
      "Find your perfect pair from our latest footwear collection.",
    discount: "50% OFF",
  },
  {
    image: "/offers/offer4.jpg",
    tag: "BEAUTY COLLECTION",
    title: "Beauty &",
    highlight: "Personal Care",
    description:
      "Upgrade your beauty routine with premium products.",
    discount: "40% OFF",
  },
  {
    image: "/offers/offer5.jpg",
    tag: "ETHNIC COLLECTION",
    title: "Celebrate Your",
    highlight: "Tradition",
    description:
      "Beautiful ethnic styles for every special occasion.",
    discount: "65% OFF",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-165 w-full overflow-hidden bg-linear-to-r from-gray-50 via-white to-pink-50"
    >
      {/* Main Hero Container */}
      <div className="mx-auto flex min-h-165 w-full max-w-350 items-center px-8 py-10 lg:px-10">

        {/* Hero Content */}
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[48%_52%]">

          {/* ================= TEXT SECTION ================= */}
          <div className="relative z-10 flex flex-col justify-center py-8 lg:pr-10">

            <p className="mb-4 text-sm font-bold tracking-[4px] text-pink-500">
              {slide.tag}
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.05] text-gray-900 sm:text-5xl lg:text-6xl">
              {slide.title}
              <br />

              <span className="text-pink-500">
                {slide.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              {/* Shop Now */}
              <button
                type="button"
                onClick={() => {
                  const products =
                    document.getElementById("products");

                  if (products) {
                    products.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="rounded-lg bg-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-pink-600 hover:shadow-lg"
              >
                Shop Now →
              </button>

              {/* Explore Collection */}
              <button
                type="button"
                onClick={() => {
                  const categories =
                    document.getElementById("categories");

                  if (categories) {
                    categories.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-800 transition duration-300 hover:border-pink-500 hover:text-pink-500"
              >
                Explore Collection
              </button>

            </div>
          </div>

          {/* ================= IMAGE SECTION ================= */}
          <div className="flex items-center justify-end">

            <div className="relative h-135 w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl">

              <img
                src={slide.image}
                alt={slide.tag}
                className="h-full w-full object-cover"
              />

              {/* Discount Badge */}
              <div className="absolute right-6 top-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-pink-500 text-center text-white shadow-xl">

                <small className="text-xs font-semibold">
                  MIN.
                </small>

                <strong className="my-1 text-xl font-extrabold">
                  {slide.discount}
                </strong>

                <span className="text-[10px] font-semibold">
                  ON TOP BRANDS
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= PREVIOUS ARROW ================= */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow-lg transition duration-300 hover:scale-110 hover:text-pink-500 lg:left-8"
      >
        ❮
      </button>

      {/* ================= NEXT ARROW ================= */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow-lg transition duration-300 hover:scale-110 hover:text-pink-500 lg:right-8"
      >
        ❯
      </button>

      {/* ================= SLIDER DOTS ================= */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">

        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-9 bg-pink-500"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}

      </div>
    </section>
  );
}

export default Hero;