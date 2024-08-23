import { ChangeEvent, useReducer } from "react";
interface InitialState {
  value: string
  bluer:boolean
}
const initialState: InitialState = {
  value: "",
  bluer: false,
};
interface Action {
  type: "INPUT" | "BLUER" | "RESET";
  value?: string;
}
function inputReducer(state: InitialState, action: Action): InitialState {
  
  if (action.type === "INPUT") {
    if (action.value === undefined) throw new Error("value");
    return {value: action.value , bluer: state.bluer}
  }
  if (action.type === "BLUER") { 
    return {value: state.value, bluer: true}
  }
  if (action.type === "RESET") {
    return { value: "", bluer: false}
  }
  return initialState;
}
export default function useForm(validation: { (value: string): boolean; (arg0: string): any; }) {
  const [inputState, dispatch] = useReducer(inputReducer, initialState)
  const isValid: boolean = validation(inputState.value);
  const hasError:boolean = !isValid && inputState.bluer //this item should be false
  function valueChangHandler(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "INPUT", value: e.currentTarget.value });
  }
  function blurHandler() {
    dispatch({type:"BLUER"})
  }
  function reset() {
    dispatch({type:"RESET"})
  }
  return {
    value: inputState.value,
    valueChangHandler,
    blurHandler,
    reset,
    hasError,
    isValid,
  };
}