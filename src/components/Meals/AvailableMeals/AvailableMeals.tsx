import React, { FC, useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import useHttp from "../../../hooks/use-http/use-http";

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

const requestConfig = {
    url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/meals.json",
};

interface AvailableMealsProps {}

const AvailableMeals: FC<AvailableMealsProps> = () => {
    const [meals, setMeals] = useState<any>([]);
    const { sendRequest: FetchMeals } = useHttp();

    useEffect(() => {
        FetchMeals(requestConfig, getDataMeals);
    }, []);

    function getDataMeals(meals: any) {
        const loadedTasks = [];
        for (const key in meals) {
            loadedTasks.push({
                id: key,
                meal: meals[key],
            });
        }
        setMeals(loadedTasks);
    }

    const mealsList = meals.map((meal: any) => {
        return <MealItem key={meal.id} mealItem={meal} />;
    });

    return (
        <>
            <Card className={styles.meals}>
                <ul>{mealsList}</ul>
            </Card>
        </>
    );
};

export default AvailableMeals;
