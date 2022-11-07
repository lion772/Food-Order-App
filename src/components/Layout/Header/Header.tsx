import React, { FC, Fragment, MouseEventHandler } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

interface HeaderProps {
    onShowCart: MouseEventHandler;
}

const Header: FC<HeaderProps> = ({ onShowCart }) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="meal" />
            </div>
        </Fragment>
    );
};

export default Header;
