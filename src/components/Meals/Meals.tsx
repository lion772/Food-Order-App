import React, { FC } from "react";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import styles from "./Meals.module.css";
import MealsSummary from "./MealsSummary/MealsSummary";

interface MealsProps {}

const Meals: FC<MealsProps> = () => {
    return (
        <div className={styles.Meals}>
            <MealsSummary />
            <AvailableMeals />
        </div>
    );
};

export default Meals;
