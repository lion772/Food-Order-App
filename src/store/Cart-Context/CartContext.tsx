import React, { FC, PropsWithChildren, ReactNode } from "react";

interface ICartProps {
    items: [];
    totalAmount: 0;
    addItem: (item: any) => void;
    removeItem: (id: string) => void;
}

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item: any) => {},
    removeItem: (id: string) => {},
});

const CartProvider: FC<PropsWithChildren<ICartProps>> = (props) => {
    const addItemToCartHandler = (item: any) => {};

    const removeItemFromCartHandler = (id: string) => {};

    const cartContext = {
        items: [],
        totalAmount: 1,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
