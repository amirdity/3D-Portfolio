import styled from "styled-components";
import Header from "./components/Header";

const Style = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    #e43e86 0%,
    #700404 100%
  );
  /* height:100vh ; */
  display: flex;
  flex-direction: column;
  font-family: IRANYekan, sans-serif;
  justify-content: center;
  align-self: center;
  justify-items: center;
`;
export default function AmirFood() {
  return (
    <Style>
      <Header />
    </Style>
  );
}
