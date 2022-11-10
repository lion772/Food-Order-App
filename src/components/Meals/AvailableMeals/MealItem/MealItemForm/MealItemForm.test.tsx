import React from "react";
import ReactDOM from "react-dom";
import MealItemForm from "./MealItemForm";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MealItemForm
            id={""}
            onAddToCart={function (amount: number): void {
                throw new Error("Function not implemented.");
            }}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
