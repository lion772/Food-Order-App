import React, { FC, Key, useContext } from "react";
import { CartContext } from "../../../../store/Cart-Context/CartContext";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

interface MealItemProps {
    key: Key | undefined | null;
    mealItem: {
        id: string;
        meal: { id: string; name: string; description: string; price: number };
    };
}

const MealItem: FC<MealItemProps> = ({ mealItem }) => {
    const { name, description, price } = mealItem.meal;
    const { id } = mealItem;
    const cartCtx = useContext(CartContext);

    const addItemToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: mealItem.id,
            name,
            price,
            amount,
        });
    };
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>${price}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
