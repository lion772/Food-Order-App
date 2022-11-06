import React, { FC, Key } from "react";
import Input from "../../../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

interface MealItemFormProps {
    id: string;
}

const MealItemForm: FC<MealItemFormProps> = ({ id }) => {
    return (
        <form className={styles.form}>
            <Input
                input={{
                    id: `amount_${id}`,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;
