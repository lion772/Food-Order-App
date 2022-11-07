import React, { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children: ReactNode;
    type: any;
    onClick: MouseEventHandler<HTMLElement> | undefined;
}

const Button: FC<ButtonProps> = ({ children, type, onClick }) => (
    <button type={type} onClick={onClick} className={styles.button}>
        {children}
    </button>
);

export default Button;
