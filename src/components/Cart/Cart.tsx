import React, { FC, MouseEventHandler, useContext, useState } from "react";
import { CartContext } from "../../store/Cart-Context/CartContext";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";

interface CartProps {
    onHideCart: MouseEventHandler;
}

const Cart: FC<CartProps> = ({ onHideCart }) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartContext = useContext(CartContext);
    const cartitems = (
        <ul className={styles["cart-items"]}>
            {cartContext.items.map((cartitem) => {
                return (
                    <CartItem
                        key={cartitem["id"]}
                        name={cartitem["name"]}
                        amount={cartitem["amount"]}
                        price={cartitem["price"]}
                        onAdd={onAddHandler.bind(null, cartitem)}
                        onRemove={onRemoveHandler.bind(null, cartitem["id"])}
                    />
                );
            })}
        </ul>
    );
    const carItemTotalAmount = cartContext.totalAmount.toFixed(2);
    const hasItems = cartContext.items.length > 0;

    function onAddHandler(actualItem: any) {
        cartContext.addItem({ ...actualItem, amount: 1 });
    }
    function onRemoveHandler(id: string) {
        cartContext.removeItem(id);
    }
    function orderHandler() {
        setIsCheckout(true);
    }

    const displayOrderList = (
        <Modal onClose={onHideCart}>
            {cartitems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${carItemTotalAmount}</span>
            </div>
            {!isCheckout && (
                <div className={styles.actions}>
                    <button
                        className={styles["button--alt"]}
                        onClick={onHideCart}
                    >
                        Close
                    </button>
                    {hasItems && (
                        <button
                            className={styles.button}
                            onClick={orderHandler}
                        >
                            Order
                        </button>
                    )}
                </div>
            )}
        </Modal>
    );

    return (
        <>
            {isCheckout && (
                <Modal onClose={onHideCart}>
                    <Checkout
                        orderedItems={cartContext.items}
                        onCancel={onHideCart}
                    />
                </Modal>
            )}
            {!isCheckout && displayOrderList}
        </>
    );
};

export default Cart;

/* Bind pre-configure a function and its argument, which'll be received upon a future execution */
