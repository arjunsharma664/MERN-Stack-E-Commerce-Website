import { useEffect, useState } from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const fashionCategories = [
          "mens-shirts",
          "mens-shoes",
          "mens-watches",
          "womens-dresses",
          "womens-shoes",
          "womens-bags",
          "womens-jewellery",
          "womens-watches",
          "sunglasses",
        ];

        const fashionProducts = data.products
          .filter((product) =>
            fashionCategories.includes(product.category)
          )
          .slice(0, 12)
          .map((product) => ({
            id: product.id,
            name: product.title,
            category: product.category,
            price: Math.round(product.price * 85),
            oldPrice: Math.round(product.price * 85 * 1.4),
            discount: `${Math.round(
              product.discountPercentage
            )}% OFF`,
            rating: product.rating,
            image: product.thumbnail,
          }));

        setProducts(fashionProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((previousWishlist) => {
      if (previousWishlist.includes(id)) {
        return previousWishlist.filter(
          (item) => item !== id
        );
      }

      return [...previousWishlist, id];
    });
  };

  if (loading) {
    return (
      <section
        id="products"
        className="w-full bg-white px-6 py-16 lg:px-10"
      >
        <div className="mx-auto max-w-350">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-bold tracking-[4px] text-pink-500">
              EXPLORE OUR COLLECTION
            </p>

            <h2 className="text-4xl font-extrabold text-gray-900">
              Trending Products
            </h2>
          </div>

          <p className="text-center text-gray-500">
            Loading products...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="products"
      className="w-full bg-white px-6 py-16 lg:px-10"
    >
      <div className="mx-auto max-w-350">

        {/* Heading */}
        <div className="mb-10 text-center">

          <p className="mb-2 text-sm font-bold tracking-[4px] text-pink-500">
            EXPLORE OUR COLLECTION
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900">
            Trending Products
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Discover our latest fashion collection,
            trending styles and amazing deals.
          </p>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
              className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gray-50">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
                />

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow-md transition duration-300 hover:scale-110 ${
                    wishlist.includes(product.id)
                      ? "text-pink-500"
                      : "text-gray-500 hover:text-pink-500"
                  }`}
                >
                  {wishlist.includes(product.id)
                    ? "♥"
                    : "♡"}
                </button>

                {/* Discount Badge */}
                <span className="absolute left-4 top-4 rounded-md bg-pink-500 px-2 py-1 text-xs font-bold text-white">
                  {product.discount}
                </span>

              </div>

              {/* Product Info */}
              <div className="p-5">

                {/* Category */}
                <p className="mb-2 text-xs font-medium capitalize text-gray-500">
                  {product.category.replaceAll("-", " ")}
                </p>

                {/* Name */}
                <h3 className="mb-3 h-12 overflow-hidden text-base font-bold leading-6 text-gray-900">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mb-4 inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-700">
                  ⭐ {product.rating}
                </div>

                {/* Price */}
                <div className="mb-4 flex items-center gap-2">

                  <strong className="text-lg font-extrabold text-gray-900">
                    ₹{product.price}
                  </strong>

                  <del className="text-sm text-gray-400">
                    ₹{product.oldPrice}
                  </del>

                  <span className="text-xs font-bold text-green-600">
                    {product.discount}
                  </span>

                </div>

                {/* Add To Bag */}
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full rounded-lg bg-pink-500 px-4 py-3 font-bold text-white transition duration-300 hover:bg-pink-600 hover:shadow-md"
                >
                  🛍️ Add to Bag
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;