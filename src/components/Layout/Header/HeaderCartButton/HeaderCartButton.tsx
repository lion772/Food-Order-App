import React, { FC, MouseEventHandler, useContext } from "react";
import CartIcon from "../../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { CartContext } from "../../../../store/Cart-Context/CartContext";

interface HeaderCartButtonProps {
    onClick: MouseEventHandler;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = ({ onClick }) => {
    const appContext = useContext(CartContext);
    const numberCartItems = appContext.items.reduce(
        (curNumber: number, item: any) => {
            return curNumber + item.amount;
        },
        0
    );
    return (
        <>
            <button className={styles.button} onClick={onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>{numberCartItems}</span>
            </button>
        </>
    );
};

export default HeaderCartButton;
