import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Header
            onShowCart={function (
                event: React.MouseEvent<Element, MouseEvent>
            ): void {
                throw new Error("Function not implemented.");
            }}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
