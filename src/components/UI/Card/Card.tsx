import React, { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
    children: any;
    className: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
    const classesAssembled = `${styles.card} ${className}`;
    return <div className={classesAssembled}>{children}</div>;
};

export default Card;
