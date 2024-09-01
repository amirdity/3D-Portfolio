import styled from "styled-components"

const SidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 4rem;
  transition: all 300ms ease;
`;
export default function Sidebar() {
  return (
    <SidebarStyle>
      <div className="logo">
        <img src="logo" alt="logo" />
      </div>
    </SidebarStyle>
  );
}
