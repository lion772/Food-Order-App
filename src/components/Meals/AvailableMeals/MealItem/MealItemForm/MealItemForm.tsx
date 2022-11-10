import React, { FC, FormEvent, useState } from "react";
import Input from "../../../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

interface MealItemFormProps {
    id: string;
    onAddToCart: (amount: number) => void;
}

type InputProps = {
    input: {
        id: string;
        type: string;
        min: string;
        max: string;
        step: string;
        defaultValue: string;
    };
};

const MealItemForm: FC<MealItemFormProps> = (props) => {
    const [amountIsValid, setAmountIsValid] = useState<boolean>(true);
    const amountInputRef = React.useRef<any>();

    const getNewMeal = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +amountInputRef.current.value;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            console.log(enteredAmountNumber >= 1);
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
        //appCtx.addItem();
    };

    return (
        <form className={styles.form} onSubmit={getNewMeal}>
            <Input
                ref={amountInputRef}
                input={{
                    id: `amount_${props.id}`,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && (
                <p>Input is not valid. Please enter a valid amount (1-5)</p>
            )}
        </form>
    );
};

export default MealItemForm;
