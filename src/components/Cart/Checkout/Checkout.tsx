import React, { FC, MouseEventHandler } from "react";
import useInput from "../../../hooks/use-input/use-input";
import styles from "./Checkout.module.css";

interface CheckoutProps {
    onCancel: MouseEventHandler;
}

const Checkout: FC<CheckoutProps> = (props) => {
    const isNotEmpty = (value: string) => value.trim() !== "";
    const isEmail = (value: string) => value.includes("@");
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput(isNotEmpty);

    const formIsValid = nameIsValid;
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }
        console.log("Form has been successfully submitted!");
        resetName();
    };
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className={styles.control}>
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
                <div className={styles.control}>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="postal">Postal Code</label>
                    <input type="text" id="postal" />
                </div>
                <div className={styles.control}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" />
                </div>
            </div>
            <button>Confirm</button>
            <button type="button" onClick={props.onCancel}>
                Cancel
            </button>
        </form>
    );
};

export default Checkout;
