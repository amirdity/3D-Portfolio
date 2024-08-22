import { createPortal } from "react-dom";
import styled from "styled-components";
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export default function BackDrop(props: {onClick:()=>void}) {
  return createPortal(
    <Backdrop onClick={props.onClick}/>,
    document.getElementById("backdrop")!
  );
}
