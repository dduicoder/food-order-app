import { useState } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartClicked, setCartClicked] = useState(false);

  const cartEnterHandler = () => {
    setCartClicked(true);
  };

  const cartLeaveHandler = () => {
    setCartClicked(false);
  };

  return (
    <CartProvider>
      {cartClicked && <Cart onClick={cartLeaveHandler} />}
      <Header onClick={cartEnterHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
