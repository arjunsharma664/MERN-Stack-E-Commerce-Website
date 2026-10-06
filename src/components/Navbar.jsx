import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-350 items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-blue-600"
        >
          ShopKart
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <button
            onClick={() => handleSectionClick("home")}
            className="font-semibold text-gray-700 transition hover:text-blue-600"
          >
            Home
          </button>

          <button
            onClick={() => handleSectionClick("products")}
            className="font-semibold text-gray-700 transition hover:text-blue-600"
          >
            Products
          </button>

          <button
            onClick={() => handleSectionClick("categories")}
            className="font-semibold text-gray-700 transition hover:text-blue-600"
          >
            Categories
          </button>

          <button
            onClick={() => handleSectionClick("about")}
            className="font-semibold text-gray-700 transition hover:text-blue-600"
          >
            About
          </button>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <Link
            to="/cart"
            className="relative flex items-center gap-2 font-semibold text-gray-700 transition hover:text-blue-600"
          >
            <span className="text-xl">🛒</span>

            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => alert("Login feature coming soon!")}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;