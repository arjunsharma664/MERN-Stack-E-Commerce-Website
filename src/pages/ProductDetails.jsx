import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const formattedProduct = {
          id: data.id,
          name: data.title,
          category: data.category,
          price: Math.round(data.price * 85),
          oldPrice: Math.round(data.price * 85 * 1.4),
          discount: `${Math.round(
            data.discountPercentage
          )}% OFF`,
          rating: data.rating,
          image: data.thumbnail,
          description: data.description,
        };

        setProduct(formattedProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-lg text-gray-500">
          Loading product...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-lg text-gray-500">
          Product not found.
        </p>
      </div>
    );
  }

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
    });

    navigate("/checkout");
  };

  const handleCheckPincode = () => {
    if (pincode.length !== 6) {
      alert("Please enter a valid 6-digit pincode.");
      return;
    }

    alert("Delivery is available at this pincode.");
  };

  return (
    <section className="w-full bg-white px-6 py-10 lg:px-10 lg:py-16">

      <div className="mx-auto grid max-w-350 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Product Image */}

        <div className="flex min-h-125 items-center justify-center overflow-hidden rounded-2xl bg-gray-50 lg:min-h-155">

          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-155 w-full object-contain p-8 transition duration-500 hover:scale-105 sm:p-12"
          />

        </div>


        {/* Product Information */}

        <div className="flex flex-col justify-center">

          {/* Category */}

          <p className="mb-3 text-sm font-semibold capitalize tracking-[2px] text-gray-500">
            {product.category.replaceAll("-", " ")}
          </p>


          {/* Product Name */}

          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>


          {/* Rating */}

          <div className="mt-5 inline-flex w-fit rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
            ⭐ {product.rating}
          </div>


          {/* Price */}

          <div className="mt-7 flex flex-wrap items-center gap-3 border-b border-gray-200 pb-7">

            <strong className="text-3xl font-bold text-gray-900">
              ₹{product.price}
            </strong>

            <del className="text-lg text-gray-400">
              ₹{product.oldPrice}
            </del>

            <span className="text-sm font-bold text-emerald-600">
              {product.discount}
            </span>

          </div>


          {/* Size */}

          <div className="mt-7">

            <div className="mb-4 flex items-center gap-4">

              <strong className="text-base text-gray-900">
                Select Size
              </strong>

              <button
                type="button"
                className="text-sm font-bold text-pink-500 hover:text-pink-600"
              >
                Size Chart
              </button>

            </div>


            <div className="flex flex-wrap gap-3">

              {["S", "M", "L", "XL", "XXL"].map(
                (size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() =>
                      setSelectedSize(size)
                    }
                    className={`flex h-13 w-13 items-center justify-center rounded-lg border text-sm font-semibold transition duration-200 ${
                      selectedSize === size
                        ? "border-pink-500 bg-pink-50 text-pink-500"
                        : "border-gray-300 bg-white text-gray-800 hover:border-pink-400 hover:text-pink-500"
                    }`}
                  >
                    {size}
                  </button>
                )
              )}

            </div>

          </div>


          {/* Description */}

          <p className="mt-8 border-b border-gray-200 pb-8 text-base leading-7 text-gray-600">
            {product.description}
          </p>


          {/* Buttons */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <button
              type="button"
              onClick={handleAddToBag}
              className="w-full rounded-lg bg-pink-500 px-6 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg"
            >
              🛍️ Add to Bag
            </button>

            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full rounded-lg border border-pink-500 bg-white px-6 py-4 font-bold text-pink-500 transition duration-300 hover:bg-pink-50"
            >
              Buy Now
            </button>

          </div>


          {/* Delivery Information */}

          <div className="mt-10 border-t border-gray-200 pt-7">

            <h3 className="text-lg font-semibold text-gray-900">
              🚚 Delivery Information
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Enter your pincode to check delivery
              availability.
            </p>


            {/* Pincode */}

            <div className="mt-4 flex w-full max-w-xl">

              <input
                type="text"
                value={pincode}
                onChange={(event) =>
                  setPincode(
                    event.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="Enter Pincode"
                maxLength="6"
                className="min-w-0 flex-1 rounded-l-lg border border-r-0 border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-pink-500"
              />

              <button
                type="button"
                onClick={handleCheckPincode}
                className="rounded-r-lg border border-pink-500 bg-white px-6 py-3 font-semibold text-pink-500 transition hover:bg-pink-500 hover:text-white"
              >
                Check
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;