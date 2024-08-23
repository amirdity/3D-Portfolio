import { Button } from "@mui/material";

import useForm from "../hook/useForm";
import { FormEvent } from "react";
import NameStyle from "./Form.styled";

interface Props {
  onClose: () => void;
}

export default function Submit(props: Props) {
  const isNotEmpty = (value: string) => value.trim() !== "";
  const {
    value: nameValue,
    valueChangHandler: nameChangeHandler,
    blurHandler: nameBlurChangeHandler,
    reset: resetName,
    hasError: nameError,
    isValid: nameIsValid,
  } = useForm(isNotEmpty);
  let formIsValid = true;
  function formHandler(e: FormEvent) {
    e.preventDefault();
    resetName()
  }

  if (nameIsValid) {
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
            <label htmlFor="">نام و نام خانوادگی</label>
            <input
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurChangeHandler}
              value={nameValue}
              min={6}
              max={20}
              required
            />
            {nameError && <p className="text-red-600 font-extrabold">**** نام خود را وارد کنید ****</p>}
          </NameStyle>
          <Button
            variant="contained"
            color="success"
            onClick={formHandler}
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
