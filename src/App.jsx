

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import OfferSlider from "./components/OfferSlider";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import CartProvider from "./context/CartProvider";


function Home() {
  return (
    <>
      {/* HOME */}
      <Hero />

      {/* CATEGORIES */}
      <Categories />

      {/* OFFERS */}
      <OfferSlider />

      {/* PRODUCTS */}
      <div id="products">
        <Products />
      </div>

      {/* ABOUT */}
      <About />

      {/* FOOTER */}
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <CartProvider>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

        </Routes>

      </CartProvider>

    </BrowserRouter>
  );
}


export default App;