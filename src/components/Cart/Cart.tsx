import React, { FC, MouseEventHandler, useContext, useState } from "react";
import { CartContext } from "../../store/Cart-Context/CartContext";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

interface CartProps {
    onHideCart: MouseEventHandler;
}

const Cart: FC<CartProps> = ({ onHideCart }) => {
    const [amount, setAmount] = useState<number>(0);
    const cartContext = useContext(CartContext);
    const cartitems = (
        <ul className={styles["cart-items"]}>
            {cartContext.items.map((cartitem) => {
                return (
                    <li>
                        <CartItem
                            item={cartitem}
                            onAdd={onAddHandler}
                            onRemove={onRemoveHandler}
                        />
                        {cartitem["amount"]}x {cartitem["name"]}
                    </li>
                );
            })}
        </ul>
    );
    const carItemTotalAmount = cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    function onAddHandler() {
        console.log(amount);
        setAmount(amount + 1);
    }
    function onRemoveHandler() {
        console.log("onRemove");
    }
    return (
        <Modal onClose={onHideCart}>
            {cartitems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${carItemTotalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles["button--alt"]} onClick={onHideCart}>
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
