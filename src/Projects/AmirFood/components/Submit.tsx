import { Button } from "@mui/material";

import useForm from "../hook/useForm";
import { FormEvent, useContext } from "react";
import NameStyle from "./Form.styled";
import { AuthContext } from "../context/store";

interface Props {
  onClose: () => void;
}

export default function Submit(props: Props) {
  const authCtx = useContext(AuthContext);
  const isNotEmpty = (value: string) => value.trim() !== "";
  const {
    value: nameValue,
    valueChangHandler: nameChangeHandler,
    blurHandler: nameBlurChangeHandler,
    reset: resetName,
    hasError: nameError,
    isValid: nameIsValid,
  } = useForm(isNotEmpty);
  const {
    value: familyValue,
    valueChangHandler: familyChangeHandler,
    blurHandler: familyBlurChangeHandler,
    reset: resetfamily,
    hasError: familyError,
    isValid: familyIsValid,
  } = useForm(isNotEmpty);
  let formIsValid = true;
  function formHandler(e: FormEvent) {
    e.preventDefault();
    authCtx?.loggInHandler({ value: nameValue });

    resetName();
    resetfamily();
    props.onClose();
  }

  if (nameIsValid && familyIsValid) {
    formIsValid = false;
  }
  return (
    <dialog
      open
      className="w-full flex flex-row justify-center bg-transparent relative"
    >
      <div className="mt-[150px] bg-yellow-700 rounded-3xl flex flex-col z-50 p-10 absolute ">
        <Button variant="contained" color="warning" onClick={props.onClose}>
          <span className="digikalaFontFamily text-[17px] font-bold">بستن</span>
        </Button>
        <form
          onSubmit={formHandler}
          className="flex flex-col justify-end gap-5 mt-5 "
          dir="rtl"
        >
          <NameStyle error={nameError}>
            <label htmlFor="">نام</label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurChangeHandler}
              value={nameValue}
              min={3}
              max={12}
              required
            />
            {nameError && (
              <p className="text-red-600 font-extrabold">
                **** نام خود را وارد کنید ****
              </p>
            )}
          </NameStyle>
          <NameStyle error={familyError}>
            <label htmlFor="">نام خانوادگی</label>
            <input
              type="text"
              id="name"
              onChange={familyChangeHandler}
              onBlur={familyBlurChangeHandler}
              value={familyValue}
              min={3}
              max={12}
              required
            />
            {familyError && (
              <p className="text-red-600 font-extrabold">
                **** نام خانوادگی خود را وارد کنید ****
              </p>
            )}
          </NameStyle>

          <Button
            variant="contained"
            color="success"
            // onClick={formHandler}
            type="submit"
            disabled={formIsValid}
          >
            <span className="digikalaFontFamily text-[17px] font-[550]">
              ثبت
            </span>
          </Button>
        </form>
      </div>
    </dialog>
  );
}
