import { FormEvent, useReducer } from "react";

type IUseInput = (value: string) => boolean;

type State = {
    enteredText: string;
    isTouched: boolean;
};

type Action = {
    type: string;
    enteredText: string;
    isTouched: boolean;
};

// Our reducer function that uses a switch statement to handle our actions
function inputReducer(state: State, action: Action) {
    const { type, enteredText, isTouched } = action;
    switch (type) {
        case "ADD":
            return {
                ...state,
                enteredText,
            };
        case "TOUCH":
            return {
                ...state,
                isTouched,
            };
        default:
            return state;
    }
}

const useInput = (validateValue: IUseInput) => {
    const [state, dispatch] = useReducer(inputReducer, {
        enteredText: "",
        isTouched: false,
    });

    const valueIsValid = validateValue(state.enteredText);
    const hasError = !valueIsValid && state.isTouched;

    const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        dispatch({
            type: "ADD",
            enteredText: event.currentTarget.value,
            isTouched: state.isTouched,
        });
    };

    const inputBlurHandler = () => {
        dispatch({
            type: "TOUCH",
            enteredText: state.enteredText,
            isTouched: true,
        });
    };

    const reset = () => {
        state.enteredText = "";
        state.isTouched = false;
    };

    return {
        value: state.enteredText,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
