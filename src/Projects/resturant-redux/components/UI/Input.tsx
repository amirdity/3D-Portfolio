import React, { InputHTMLAttributes } from "react";

import classes from "./Input.module.css";
interface Props {
  label: string;
  input: { id: string } & InputHTMLAttributes<HTMLInputElement>;
}
const Input = React.forwardRef((props: Props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
