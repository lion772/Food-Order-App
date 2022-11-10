import React, { useReducer } from "react";

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

enum CartActionKind {
    ADD = "ADD",
    REMOVE = "REMOVE",
}

// An interface for our actions
interface CartAction {
    type: CartActionKind | string;
    item: any;
    id: string;
}

// An interface for our state
interface CartState {
    items: any;
    totalAmount: number;
}

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item: any) => {},
    removeItem: (id: string) => {},
});

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state: CartState, action: any) => {
    const { type, item } = action;

    switch (type) {
        case CartActionKind.ADD:
            /* Concat returns a new array, unlike push which edits it, so we don't edit existing states or snapshots */
            let updatedItems = state.items.concat(action.item);
            const updatedTotalAmount =
                state.totalAmount + item.price * item.amount;
            /* Return a new state */
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };

        case CartActionKind.REMOVE:
            const updatedItemsDiscount = removeItem(
                state.items.concat,
                action.item
            );
            const updatedTotalAmountDiscount =
                state.totalAmount - item.price * item.amount;
            /* Return a new state */
            return {
                items: updatedItemsDiscount,
                totalAmount: updatedTotalAmountDiscount,
            };

        default:
            return defaultCartState;
    }
};

const CartProvider = (props: any) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item: any) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id: any) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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
