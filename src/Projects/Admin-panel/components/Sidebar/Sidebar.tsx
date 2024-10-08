import styled from "styled-components";
import logo from "../../asset/logo.png";
import { SidebarData } from "../../Data/Data";
import { useState } from "react";

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

  & .menuItem:last-child {
    position: absolute;
    bottom: 2.3rem;
    width: 100%;
  }
  & .active {
    background: #f799a354;
    margin-left: 0;
  }
  & .active::before {
    content: "";
    width: 5px;
    height: 30px;
    background: #ff919d;
    /* margin-right: calc(1rem - 8px); */
  }
`;
export default function Sidebar() {
  const [selected, setSelected] = useState(0)
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
        {SidebarData.map((item, index) => (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <div>
              <img src={item.icon} alt={item.heading} width={50} height={50} />
            </div>
            <span>{item.heading}</span>
          </div>
        ))}
      </div>
    </SidebarStyle>
  );
}
