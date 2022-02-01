import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  // const [amountIsValid, setAmountIsVaild] = useState(true);
  const [btnAnimation, setBtnAnimation] = useState(false);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setBtnAnimation(true);
      const timer = setTimeout(() => {
        setBtnAnimation(false);
      }, 600);
      return () => {
        clearTimeout(timer);
      };
    } else {
      props.onAddToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button
        className={btnAnimation ? classes.invalid : classes.valid}
        onClick={submitHandler}
      >
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
