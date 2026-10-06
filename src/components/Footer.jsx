function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">

      {/* Footer Main */}
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-500">
            ShopKart
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-gray-400">
            Your one-stop destination for fashion, footwear, beauty,
            accessories and more.
          </p>

          <div className="mt-6 flex gap-5">
            <a
              href="#"
              className="text-sm font-semibold text-gray-400 transition hover:text-pink-500"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-gray-400 transition hover:text-pink-500"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-sm font-semibold text-gray-400 transition hover:text-pink-500"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#home"
              className="text-gray-400 transition hover:text-pink-500"
            >
              Home
            </a>

            <a
              href="#products"
              className="text-gray-400 transition hover:text-pink-500"
            >
              Products
            </a>

            <a
              href="#categories"
              className="text-gray-400 transition hover:text-pink-500"
            >
              Categories
            </a>

            <a
              href="#about"
              className="text-gray-400 transition hover:text-pink-500"
            >
              About
            </a>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Customer Service
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            <a
              href="#"
              className="text-gray-400 transition hover:text-pink-500"
            >
              Contact Us
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-pink-500"
            >
              Shipping
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-pink-500"
            >
              Returns
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-pink-500"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Stay Updated
          </h3>

          <p className="mt-5 leading-6 text-gray-400">
            Subscribe to get the latest offers and updates.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-pink-500"
            />

            <button
              type="button"
              className="rounded-lg bg-pink-500 px-5 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-350 flex-col gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-10">

          <p>
            © 2026 ShopKart. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition hover:text-pink-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-pink-500"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;