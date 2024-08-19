import megamenu from "../../../public/asset/header/megamenu-icon.svg"

function MegaMenu() {
  return (
    <div className="flex flex-row items-center text-[10px]">
      <img src={megamenu} alt="دسته بندی کالاها" className="" />
      <span>دسته بندی کالاها</span>
    </div>
  );
}

export default MegaMenu;
