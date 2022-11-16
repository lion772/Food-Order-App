import React, { FC, MouseEventHandler, useContext, useState } from "react";
import useHttp from "../../../hooks/use-http/use-http";
import useInput from "../../../hooks/use-input/use-input";
import { CartContext } from "../../../store/Cart-Context/CartContext";
import styles from "./Checkout.module.css";

interface CheckoutProps {
    onCancel: MouseEventHandler;
    orderedItems: never[];
}

const Checkout: FC<CheckoutProps> = ({ onCancel, orderedItems }) => {
    const { removeAllItems } = useContext(CartContext);
    const { isLoading, error, sendRequest: orderMeal } = useHttp();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isNotEmpty = (value: string) => value.trim() !== "";
    const isFiveChars = (value: string) => value.trim().length === 5;
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
    } = useInput(isFiveChars);
    const {
        value: city,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity,
    } = useInput(isNotEmpty);

    const processOrderMeal = (data: any) => console.log(data);

    const formIsValid =
        nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    const submitHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(formIsValid);

        if (!formIsValid) {
            return;
        }
        console.log("Form has been successfully submitted!");

        const requestConfig = {
            url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/order-meal.json",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: {
                user: { name, street, postal, city },
                orderedItems,
            },
        };
        await orderMeal(requestConfig, processOrderMeal);
        setIsSubmitted(true);

        resetName();
        resetStreet();
        resetPostal();
        resetCity();
        removeAllItems();
    };

    const nameFormControl = nameHasError
        ? `${styles.control} ${styles.invalid}`
        : `${styles.control}`;
    const streetFormControl = streetHasError
        ? `${styles.control} ${styles.invalid}`
        : `${styles.control}`;
    const postalFormControl = postalHasError
        ? `${styles.control} ${styles.invalid}`
        : `${styles.control}`;
    const cityFormControl = cityHasError
        ? `${styles.control} ${styles.invalid}`
        : `${styles.control}`;

    return (
        <>
            {!error && isSubmitted && (
                <p className={styles.sent}>Sent the order successfully! </p>
            )}
            {!isSubmitted && (
                <form className={styles.form} onSubmit={submitHandler}>
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
                            {streetHasError && (
                                <p>Please enter a valid street.</p>
                            )}
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
                            {postalHasError && (
                                <p>
                                    Please enter a valid postal code. (5
                                    characters long)
                                </p>
                            )}
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
                        <button
                            disabled={
                                !nameIsValid ||
                                !streetIsValid ||
                                !postalIsValid ||
                                !cityIsValid
                            }
                        >
                            Confirm
                        </button>
                        <button type="button" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                    {!isLoading && error && <p>{error}</p>}
                </form>
            )}
        </>
    );
};

export default Checkout;
