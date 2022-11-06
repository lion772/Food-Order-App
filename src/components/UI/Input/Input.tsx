import React, { FC, Key } from "react";
import styles from "./Input.module.css";

interface InputProps {
    input: {
        id: string;
        type: string;
        min: string;
        max: string;
        step: string;
        defaultValue: string;
    };
}

const Input: FC<InputProps> = ({ input }) => {
    return (
        <div className={styles.input}>
            <label htmlFor={input.id}>Amount</label>
            <input {...input} />
        </div>
    );
};

export default Input;
