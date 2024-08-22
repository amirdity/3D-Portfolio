import { FormEvent, useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
interface Props {
  onAddToCart: (number: number) => void;
  id: string;
}
const MealItemForm = (props: Props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<string | undefined>(undefined);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    // if(amountInputRef === undefined) {throw new Error("amountInputRef is undefined")}

    const enteredAmount = amountInputRef.current?.valueOf()


const enteredAmountNumber = +(enteredAmount?.toString() ?? '0');//+


    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef?.current}

        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
