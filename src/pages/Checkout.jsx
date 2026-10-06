import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const {
    cart,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  const deliveryCharge = 0;
  const totalAmount = cartTotal;

  const handlePlaceOrder = () => {
    alert("Order placed successfully! 🎉");
  };

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-gray-50 px-6 py-16 text-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-4xl">
          🛒
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Your Cart is Empty
        </h2>

        <p className="mt-3 text-gray-500">
          Add some products before proceeding to checkout.
        </p>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-7 rounded-lg bg-pink-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-pink-600 hover:shadow-lg"
        >
          Continue Shopping
        </button>

      </section>
    );
  }

  return (
    <section className="w-full bg-gray-50 px-6 py-10 lg:px-10 lg:py-16">

      <div className="mx-auto grid max-w-350 grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">

        {/* LEFT SIDE */}

        <div>
          <h2 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Checkout
          </h2>

          {/* Delivery Address */}

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900">
              Delivery Address
            </h3>

            <div className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                />

              </div>

              <input
                type="text"
                placeholder="State"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />

            </div>

          </div>

          {/* Payment Method */}

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900">
              Payment Method
            </h3>

            <div className="mt-5 space-y-3">

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-pink-400 hover:bg-pink-50">

                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="h-4 w-4 accent-pink-500"
                />

                <span className="font-medium text-gray-700">
                  💵 Cash on Delivery
                </span>

              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-pink-400 hover:bg-pink-50">

                <input
                  type="radio"
                  name="payment"
                  className="h-4 w-4 accent-pink-500"
                />

                <span className="font-medium text-gray-700">
                  💳 Credit / Debit Card
                </span>

              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4 transition hover:border-pink-400 hover:bg-pink-50">

                <input
                  type="radio"
                  name="payment"
                  className="h-4 w-4 accent-pink-500"
                />

                <span className="font-medium text-gray-700">
                  📱 UPI
                </span>

              </label>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="h-fit lg:sticky lg:top-24">

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            {/* Products */}

            <div className="mt-6 space-y-4">

              {cart.map((item) => (

                <div
                  className="flex gap-4 border-b border-gray-100 pb-4"
                  key={item.id}
                >

                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-50">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />

                  </div>

                  <div className="min-w-0 flex-1">

                    <h4 className="truncate font-semibold text-gray-900">
                      {item.name}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>

                    {item.size && (
                      <p className="text-sm text-gray-500">
                        Size: {item.size}
                      </p>
                    )}

                    <strong className="mt-1 block text-sm font-bold text-gray-900">
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>

                </div>

              ))}

            </div>

            {/* Price Details */}

            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">

                <span>Delivery</span>

                <span className="font-bold text-emerald-600">
                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}
                </span>

              </div>

              <hr className="border-gray-200" />

              <div className="flex items-center justify-between">

                <strong className="text-gray-900">
                  Total Amount
                </strong>

                <strong className="text-2xl font-bold text-gray-900">
                  ₹{totalAmount}
                </strong>

              </div>

            </div>

            {/* Place Order */}

            <button
              type="button"
              className="mt-7 w-full rounded-lg bg-pink-500 px-6 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-lg"
              onClick={handlePlaceOrder}
            >
              Place Order →
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
              🔒 Safe & Secure Checkout
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;