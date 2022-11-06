import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card className={"styles.card"}>test</Card>, div);
    ReactDOM.unmountComponentAtNode(div);
});
