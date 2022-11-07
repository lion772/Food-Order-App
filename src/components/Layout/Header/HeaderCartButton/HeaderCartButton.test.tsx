import React from "react";
import ReactDOM from "react-dom";
import HeaderCartButton from "./HeaderCartButton";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <HeaderCartButton
            onClick={function (
                event: React.MouseEvent<Element, MouseEvent>
            ): void {
                throw new Error("Function not implemented.");
            }}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
