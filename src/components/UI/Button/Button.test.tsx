import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Button children={undefined} type={undefined} onClick={undefined} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
