import React, { FC } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

interface AvailableMealsProps {}

const AvailableMeals: FC<AvailableMealsProps> = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} mealItem={meal} />
    ));

    return (
        <>
            <Card className={styles.meals}>
                <ul>{mealsList}</ul>
            </Card>
        </>
    );
};

export default AvailableMeals;
