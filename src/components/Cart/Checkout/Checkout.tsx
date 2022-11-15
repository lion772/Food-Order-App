import React, { FC, MouseEventHandler } from "react";
import styles from "./Checkout.module.css";

interface CheckoutProps {
    onCancel: MouseEventHandler;
}

const Checkout: FC<CheckoutProps> = (props) => {
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        
    };
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className={styles.control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" />
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
