import React from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Cart
            onHideCart={function (
                event: React.MouseEvent<Element, MouseEvent>
            ): void {
                throw new Error("Function not implemented.");
            }}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
