import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.png";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="food table" />
      </div>
    </Fragment>
  );
};

export default Header;
