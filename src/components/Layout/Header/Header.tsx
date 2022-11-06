import React, { FC, Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="meal" />
            </div>
        </Fragment>
    );
};

export default Header;