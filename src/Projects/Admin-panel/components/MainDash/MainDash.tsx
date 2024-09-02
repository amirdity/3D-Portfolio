import styled from "styled-components";
import Cards from "./Cards";

const MainDashStyle = styled.div`
  /* padding-top: 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export default function MainDash() {
  return <MainDashStyle>
    <Cards/>
  </MainDashStyle>;
}
