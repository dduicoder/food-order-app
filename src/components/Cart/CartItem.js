import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          className={`${classes.button} ${classes["add-sub"]}`}
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className={`${classes.button} ${classes["add-sub"]}`}
          onClick={props.onAdd}
        >
          +
        </button>
        <button
          className={`${classes.button} ${classes.delete}`}
          onClick={props.onDelete}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default CartItem;
