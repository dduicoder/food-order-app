import { Fragment, useState } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartClicked, setCartClicked] = useState(false);

  const cartEnterHandler = () => {
    setCartClicked(true);
  };

  const cartLeaveHandler = () => {
    setCartClicked(false);
  };

  return (
    <Fragment>
      {cartClicked && <Cart onClick={cartLeaveHandler} />}
      <Header onClick={cartEnterHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
