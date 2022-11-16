import React, { FC, MouseEventHandler } from "react";
import useInput from "../../../hooks/use-input/use-input";
import styles from "./Checkout.module.css";

interface CheckoutProps {
    onCancel: MouseEventHandler;
}

const Checkout: FC<CheckoutProps> = (props) => {
    const isNotEmpty = (value: string) => value.trim() !== "";
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput(isNotEmpty);
    const {
        value: street,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreet,
    } = useInput(isNotEmpty);
    const {
        value: postal,
        isValid: postalIsValid,
        hasError: postalHasError,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalBlurHandler,
        reset: resetPostal,
    } = useInput(isNotEmpty);
    const {
        value: city,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity,
    } = useInput(isNotEmpty);

    let formIsValid = false;

    if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
        formIsValid = true;
    }

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!formIsValid) {
            console.log(formIsValid);
            return;
        }
        console.log("Form has been successfully submitted!");
        resetName();
        resetStreet();
        resetPostal();
        resetCity();
    };

    const nameFormControl = nameHasError
        ? `${styles.control} invalid`
        : `${styles.control}`;
    const streetFormControl = streetHasError
        ? `${styles.control} invalid`
        : `${styles.control}`;
    const postalFormControl = postalHasError
        ? `${styles.control} invalid`
        : `${styles.control}`;
    const cityFormControl = cityHasError
        ? `${styles.control} invalid`
        : `${styles.control}`;

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className={nameFormControl}>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                    />
                    {nameHasError && <p>Please enter a valid name.</p>}
                </div>
                <div className={streetFormControl}>
                    <label htmlFor="street">Street</label>
                    <input
                        type="text"
                        id="street"
                        value={street}
                        onChange={streetChangeHandler}
                        onBlur={streetBlurHandler}
                    />
                    {streetHasError && <p>Please enter a valid street.</p>}
                </div>
                <div className={postalFormControl}>
                    <label htmlFor="postal">Postal Code</label>
                    <input
                        type="text"
                        id="postal"
                        value={postal}
                        onChange={postalChangeHandler}
                        onBlur={postalBlurHandler}
                    />
                    {postalHasError && <p>Please enter a valid postal code.</p>}
                </div>
                <div className={cityFormControl}>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={cityChangeHandler}
                        onBlur={cityBlurHandler}
                    />
                    {cityHasError && <p>Please enter a valid city.</p>}
                </div>
            </div>
            <div className={styles.actions}>
                <button>Confirm</button>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default Checkout;
