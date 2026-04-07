import React from "react";
import { Outlet } from "react-router-dom";

//layout
import Footer from "./src/components/layouts/Footer";
import SmoothScroll from "./src/utilis/SmoothScroll";
import GoToTopButton from "./src/components/layouts/GotoTopButton";
import Header from "./src/components/layouts/Navbar";
import { CartProvider } from "./src/utilis/cart/CartProvider";

function App() {
  return (
    <>
      <CartProvider>

        <SmoothScroll />
        <Header />
        <main>
          <Outlet />
        </main>

        <Footer />

        <GoToTopButton />
      </CartProvider>
    </>
  );
}

export default App;
