import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-50 px-6 py-10 lg:px-10 lg:py-16">

      {/* Header */}
      <div className="mx-auto mb-10 max-w-350">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Shopping Cart
        </h2>

        <p className="mt-2 text-gray-500">
          {cart.length} {cart.length === 1 ? "item" : "items"} in your bag
        </p>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="mx-auto flex min-h-[50vh] max-w-350 flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-4xl">
            🛒
          </div>

          <h3 className="mt-6 text-2xl font-bold text-gray-900">
            Your Cart is Empty
          </h3>

          <p className="mt-3 max-w-md text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-7 rounded-lg bg-pink-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-pink-600 hover:shadow-lg"
          >
            Continue Shopping
          </button>

        </div>
      ) : (

        /* Cart Content */
        <div className="mx-auto grid max-w-350 grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">

          {/* Cart Products */}
          <div className="space-y-5">

            {cart.map((product) => (

              <div
                key={product.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row"
              >

                {/* Product Image */}
                <div className="flex h-52 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-44 sm:w-44">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-4 transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col">

                  <p className="text-sm font-semibold capitalize text-gray-400">
                    {product.category}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">

                    <strong className="text-xl font-bold text-gray-900">
                      ₹{product.price}
                    </strong>

                    {product.oldPrice && (
                      <del className="text-sm text-gray-400">
                        ₹{product.oldPrice}
                      </del>
                    )}

                    {product.discount && (
                      <span className="text-sm font-bold text-emerald-600">
                        {product.discount}
                      </span>
                    )}

                  </div>

                  {/* Quantity */}
                  <div className="mt-5 flex flex-wrap items-center gap-4">

                    <span className="text-sm font-semibold text-gray-700">
                      Quantity:
                    </span>

                    <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(product.id)
                        }
                        className="flex h-9 w-9 items-center justify-center text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-300 px-3 text-sm font-semibold text-gray-900">
                        {product.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(product.id)
                        }
                        className="flex h-9 w-9 items-center justify-center text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                    className="mt-5 w-fit text-sm font-semibold text-red-500 transition hover:text-red-600"
                  >
                    🗑 Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-24">

            <h3 className="text-xl font-bold text-gray-900">
              Order Summary
            </h3>

            {/* Items */}
            <div className="mt-7 flex items-center justify-between text-sm text-gray-600">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            {/* Delivery */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>Delivery</span>

              <span className="font-bold text-emerald-600">
                FREE
              </span>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900">
                Total Amount
              </span>

              <strong className="text-2xl font-bold text-gray-900">
                ₹{cartTotal}
              </strong>
            </div>

            {/* Checkout */}
            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="mt-7 w-full rounded-lg bg-pink-500 px-6 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg"
            >
              Proceed to Checkout →
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              🔒 Safe & Secure Checkout
            </p>

          </div>

        </div>

      )}

    </section>
  );
}

export default Cart;