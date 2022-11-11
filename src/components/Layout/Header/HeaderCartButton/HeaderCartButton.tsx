import React, {
    FC,
    MouseEventHandler,
    useContext,
    useEffect,
    useState,
} from "react";
import CartIcon from "../../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { CartContext } from "../../../../store/Cart-Context/CartContext";

interface HeaderCartButtonProps {
    onClick: MouseEventHandler;
}

const HeaderCartButton: FC<HeaderCartButtonProps> = ({ onClick }) => {
    const cartContext = useContext(CartContext);
    const { items } = cartContext;
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const refresh = setTimeout(() => setBtnIsHighlighted(false), 300);

        return () => {
            clearTimeout(refresh);
        };
    }, [items]);

    const numberCartItems = items.reduce((curNumber: number, item: any) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${
        btnIsHighlighted ? styles.bump : ""
    }`;
    return (
        <>
            <button className={btnClasses} onClick={onClick}>
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
