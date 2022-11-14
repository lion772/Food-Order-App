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
/* interface CartAction {
    type: CartActionKind | string;
    item: any;
    id: string;
} */

// An interface for our state
type CartState = {
    items: any;
    totalAmount: number;
};

type CartAction = {
    type: string;
    item: any;
    id: string;
};

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

const cartReducer = (state: CartState, action: CartAction) => {
    const { type, item, id } = action;
    const { items, totalAmount } = state;
    let updatedItems, updatedItem, index, existingItem;

    switch (type) {
        case CartActionKind.ADD:
            let updatedTotalAmount = totalAmount + item.price * item.amount;

            index = items.findIndex((itemEl: any) => itemEl.id === item.id);
            existingItem = items[index];

            if (existingItem) {
                /* Update obj*/
                updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + item.amount,
                };
                updatedItems = [...items];
                updatedItems[index] = updatedItem;
            } else {
                /* Add obj */
                updatedItems = items.concat(item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            };

        case CartActionKind.REMOVE:
            console.log(state, action, action.id);

            index = items.findIndex((itemEl: any) => itemEl.id === action.id);
            existingItem = items[index];

            if (existingItem.amount === 1) {
                /* Remove obj */
                updatedItems = items.filter(
                    (itemEl: any) => itemEl.id !== action.id
                );
            } else {
                /* Discount one */
                updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1,
                };
                updatedItems = [...items];
                updatedItems[index] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: totalAmount - existingItem.price,
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
        console.log(item);
        dispatchCartAction({
            type: "ADD",
            item: item,
            id: item.id,
        });
    };

    const removeItemFromCartHandler = (id: any) => {
        const item = cartState.items.filter((itemEl: any) => itemEl.id === id);
        console.log(item);
        dispatchCartAction({
            type: "REMOVE",
            item: item,
            id: id,
        });
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
