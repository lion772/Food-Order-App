import { FC, useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import useHttp from "../../../hooks/use-http/use-http";

const requestConfig = {
    url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/meals.json",
};

interface AvailableMealsProps {}

const AvailableMeals: FC<AvailableMealsProps> = () => {
    const [meals, setMeals] = useState<any>([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    useEffect(() => {
        fetchMeals(requestConfig, getDataMeals);
    }, [fetchMeals]);

    function getDataMeals(meals: any) {
        const loadedMeals = [];
        for (const key in meals) {
            loadedMeals.push({
                id: key,
                meal: meals[key],
            });
        }
        setMeals(loadedMeals);
    }

    const mealsList = meals.map((meal: any) => {
        return <MealItem key={meal.id} mealItem={meal} />;
    });

    return (
        <>
            {isLoading && <p className={styles.MealIsLoading}>Loading...</p>}
            {!isLoading && !error && (
                <Card className={styles.meals}>
                    <ul>{mealsList}</ul>
                </Card>
            )}
            {!isLoading && error !== "" && (
                <p className={styles.MealError}>{error}</p>
            )}
        </>
    );
};

export default AvailableMeals;
