import React, {
    FC,
    FormEvent,
    FormEventHandler,
    HTMLInputTypeAttribute,
    RefObject,
    useContext,
} from "react";
import { CartContext } from "../../../../../store/Cart-Context/CartContext";
import Input from "../../../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

interface MealItemFormProps {
    id: string;
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

const MealItemForm: FC<MealItemFormProps> = ({ id }) => {
    const appCtx = useContext(CartContext);
    const ref = React.useRef<any>();

    const getNewMeal = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(ref.current.value);
        //appCtx.addItem();
    };

    return (
        <form className={styles.form} onSubmit={getNewMeal}>
            <Input
                ref={ref}
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
