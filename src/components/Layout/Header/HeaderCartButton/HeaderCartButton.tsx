import React, { FC, MouseEventHandler } from "react";
import CartIcon from "../../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

interface HeaderCartButtonProps {
    onClick: MouseEventHandler;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = ({ onClick }) => {
    return (
        <>
            <button className={styles.button} onClick={onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>3</span>
            </button>
        </>
    );
};

export default HeaderCartButton;
