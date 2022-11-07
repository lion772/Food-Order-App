import React, { Fragment, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/Cart-Context/CartContext";

function App() {
    const [isCartOpen, setCartOpen] = useState<boolean>(false);

    const showCartHandler = () => {
        setCartOpen(true);
    };

    const hideCartHandler = () => {
        setCartOpen(false);
    };

    return (
        <ErrorBoundary>
            <CartProvider>
                {isCartOpen && <Cart onHideCart={hideCartHandler} />}
                <Header onShowCart={showCartHandler} />
                <main>
                    <Meals />
                </main>
            </CartProvider>
        </ErrorBoundary>
    );
}

export default App;
