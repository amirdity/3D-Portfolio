import { useState } from "react";

const buttons: string[] = [
  "ست پرگار",
  "مداد رنگی 24 رنک آریا",
  "دوبنده",
  "لب تاپ",
  "قهوه",
];
export default function Search({ close }: { close: () => void }) {
  const [searchInput, setSearchInput] = useState<string>("");
  function clearInput() {
    setSearchInput("");
  }
  return (
    <div className="top-0 left-0 w-full z-3 bg-[#fff] absolute h-full max-w-[1000px] z-20">
      <header className="px-4 lg:py-2 py-3 relative flex  z-5 bg-base shadow-none border-solid border-0 border-base h-[65px] flex-col">
        <div className="w-full bg-[#f0f0f1] rounded-full flex justify-start gap-1 pr-5 items-center align-middle">
          <img
            src="/asset/header/mobile-arrow-search.svg"
            alt="جستجو"
            width={20}
            height={20}
            className="bg-transparent"
            onClick={close}
          />
          <input
            placeholder="جستجو در همه کالا ها"
            className="text-mobile-search bg-transparent text-[#81858b] opacity-70 caret-blue-500 py-2 w-full"
            autoComplete="off"
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          {searchInput && (
            <button onClick={clearInput} className="bg-transparent ml-3">
              <img
                src="/asset/header/cross.svg"
                alt="cross"
                width={24}
                className="bg-transparent"
              />
            </button>
          )}
        </div>
        <div className="mt-8 flex justify-start mr-1">
          {!searchInput && (
            <div className="flex flex-col">
              <div className="flex flex-row gap-4">
                <img src="/asset/header/fire.svg" alt="fire" width={24} />
                <span className="">جستجوهای پرطرفدار</span>
              </div>
              <div className="flex flex-row justify-start gap-3 mt-3">
                {buttons.map((button) => (
                  <button className="border-[1px] border-[#bebebe] border-solid py-1 pr-2 px-1 rounded-3xl flex justify-around  align-middle text-[13px] font-[500] overflow-hidden">
                    <span>{button}</span>
                    <img
                      src="asset/header/half-arrow.svg"
                      alt="arrow"
                      width={20}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
          {searchInput && (
            <div className="flex flex-col">
              <div className="flex flex-row gap-4 overflow-hidden max-w-[700px]">
                <img src="/asset/header/searchIcon.svg" alt="fire" width={24} />
                <p className="text-subtitle-strong text-neutral-700 flex align-center overflow-hidden">
                  جستجوی «{searchInput}»
                </p>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
