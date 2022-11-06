import { stringify } from "querystring";
import React from "react";
import ReactDOM from "react-dom";
import Input from "./Input";

it("It should mount", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Input
            input={{
                id: "id",
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1",
            }}
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
