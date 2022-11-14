import React, { FC, Key, useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../store/Cart-Context/CartContext";
import Card from "../../../UI/Card/Card";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

interface MealItemProps {
    key: Key | undefined | null;
    mealItem: {
        meal: { id: string; name: string; description: string; price: number };
    };
}

const MealItem: FC<MealItemProps> = ({ mealItem: { meal } }) => {
    const { name, description, price } = meal;
    const cartCtx = useContext(CartContext);

    console.log(meal);

    const addItemToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            price: meal.price,
            amount: amount,
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
                <MealItemForm id={meal.id} onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
