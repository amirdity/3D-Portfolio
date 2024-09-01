import styled from "styled-components";
import logo from "../../asset/logo.png";
import { SidebarData } from "../../Data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;
  transition: all 300ms ease;
  & .logo {
    display: flex;
    height: 5rem;
    font-weight: bold;
    font-size: 22px;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 4%;
  }
  & .logo > span > span {
    color: #ff919d;
  }

  & .menu {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  & .menuItem {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 2.5rem;
    margin-left: 2rem;
    position: relative;
    transition: all 300ms ease;
    border-radius: 0.7rem;
    font-size: 14px;
  }

  & .menuItem:hover {
    cursor: pointer;
  }

  /* & .menuItem:last-child {
    position: absolute;
    bottom: 2.3rem;
    width: 100%;
  } */
`;
export default function Sidebar() {
  return (
    <SidebarStyle>
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="logo" width={24} height={24} />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu */}
      <div className="menu">
        {/* {SidebarData.map((item, index) => (
          <div className="menuItem">
            <div>icon</div>
            <span>dashbord</span>
          </div>
        ))} */}
        <div className="menuItem">
          <div>
            <FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-house" />
          </div>
          <span>dashbord</span>
        </div>
      </div>
    </SidebarStyle>
  );
}
