function About() {
  return (
    <section
      id="about"
      className="w-full bg-white px-6 py-16 lg:px-10"
    >
      <div className="mx-auto grid max-w-350 grid-cols-1 items-center gap-12 lg:grid-cols-2">

        {/* About Text */}
        <div>
          <p className="mb-3 text-sm font-bold tracking-[4px] text-pink-500">
            ABOUT SHOPKART
          </p>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Your Style.
            <br />
            Your Choice.
            <br />
            <span className="text-pink-500">Your ShopKart.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
            ShopKart is your one-stop destination for fashion, footwear,
            beauty, accessories and more. We bring you the latest trends and
            great deals at affordable prices.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
            Discover quality products, exciting offers and a smooth shopping
            experience — all in one place.
          </p>

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("categories")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className="mt-7 rounded-lg bg-pink-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-pink-600 hover:shadow-lg"
          >
            Explore Collection →
          </button>
        </div>

        {/* About Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Card 1 */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="text-3xl">🛍️</span>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Latest Trends
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Discover the latest fashion and styles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="text-3xl">💎</span>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Quality Products
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Carefully selected products for you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="text-3xl">⚡</span>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Great Deals
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Amazing offers at affordable prices.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="text-3xl">❤️</span>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              Easy Shopping
            </h3>

            <p className="mt-2 leading-6 text-gray-600">
              Simple and enjoyable shopping experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;