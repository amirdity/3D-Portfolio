import { ComponentPropsWithoutRef, forwardRef } from "react";
type InputRef = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;
const Input = forwardRef<HTMLInputElement, InputRef>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});
export default Input;
