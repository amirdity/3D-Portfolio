import { useState } from "react";


export default function Search() {
  const [show,setShow] = useState(false)
  function showDesktopSearch() {
    setShow(!show);
  }
  return (
    <>
      <div
        className="w-[600px] bg-[#f0f0f1] rounded-lg flex flex-row justify-start align-middle items-center h-[44px] relative"
        onClick={showDesktopSearch}
      >
        <img
          src="/asset/header/searchIcon.svg"
          alt="search"
          width={24}
          className="bg-inherit mr-3"
        />
        <span className="bg-inherit h-[44px] mr-3 flex items-center text-gray-500 ">
          جستجو
        </span>

        {/* opening window */}
        {/* <div className="absolute flex flex-col">
          <div className="flex flex-row">
            <img
              src="/asset/header/searchIcon.svg"
              alt="search"
              width={24}
              className="bg-inherit mr-3"
            />
            <input
              className="bg-inherit h-[44px] mr-3 flex items-center text-gray-500 border-b-2 border-blue-700"
              placeholder=" جستجو"
            ></input>
          </div>
        </div> */}
      </div>
    </>
  );
}
