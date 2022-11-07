import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Modal children={undefined} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
