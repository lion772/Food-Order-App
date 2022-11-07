import React, { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
    const [isCartOpen, setCartOpen] = useState<boolean>(false);

    const showCartHandler = () => {
        setCartOpen(true);
    };

    const hideCartHandler = () => {
        setCartOpen(false);
    };

    return (
        <Fragment>
            {isCartOpen && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
