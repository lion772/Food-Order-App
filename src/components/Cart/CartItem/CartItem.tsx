import React, { FC, Key } from "react";
import styles from "./CartItem.module.css";

interface CartItemProps {
    key: Key | undefined | null;
    name: string;
    amount: number;
    price: number;
    onAdd: () => void;
    onRemove: () => void;
}

const CartItem: FC<CartItemProps> = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={styles["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.onRemove} onClick={props.onRemove}>
                    −
                </button>
                <button className={styles.onAdd} onClick={props.onAdd}>
                    +
                </button>
            </div>
        </li>
    );
};

export default CartItem;
