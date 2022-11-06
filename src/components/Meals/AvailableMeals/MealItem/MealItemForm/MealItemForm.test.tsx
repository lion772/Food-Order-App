import React from "react";
import ReactDOM from "react-dom";
import MealItemForm from "./MealItemForm";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MealItemForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});
