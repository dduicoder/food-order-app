import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const empty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityRef.current.value;

    const nameValid = !empty(name);
    const streetValid = !empty(street);
    const postalCodeValid = postalCode.trim().length === 5;
    const cityValid = !empty(city);

    setFormIsValid({
      name: nameValid,
      street: streetValid,
      postalCode: postalCodeValid,
      city: cityValid,
    });

    if (!nameValid || !streetValid || !postalCodeValid || !cityValid) {
      return;
    }

    props.onSubmit({
      name,
      street,
      postalCode,
      city,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input
          className={!formIsValid.name && classes.invalid}
          type="text"
          id="name"
          ref={nameRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          className={!formIsValid.street && classes.invalid}
          type="text"
          id="street"
          ref={streetRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          className={!formIsValid.postalCode && classes.invalid}
          type="text"
          id="postal"
          ref={postalCodeRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          className={!formIsValid.city && classes.invalid}
          type="text"
          id="city"
          ref={cityRef}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClick}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
