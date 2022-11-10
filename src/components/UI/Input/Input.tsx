import React, { FC, forwardRef } from "react";
import styles from "./Input.module.css";

interface InputProps {
    ref: any;
    input: {
        id: string;
        type: string;
        min: string;
        max: string;
        step: string;
        defaultValue: string;
    };
}

const Input: FC<InputProps> = forwardRef(({ input }, ref: any) => {
    return (
        <div className={styles.input}>
            <label htmlFor={input.id}>Amount</label>
            <input ref={ref} {...input} />
        </div>
    );
});

export default Input;
