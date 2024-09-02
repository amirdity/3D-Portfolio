import styled from "styled-components";
// import { cardsData } from "../../Data/Data";
// import Card from "./Card";
const CardsStyle = styled.div`
  display: flex;
  gap: 10px;

  & .parentContainer {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;

    & .parentContainer {
      height: 9rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export default function Cards() {
  return (
    <CardsStyle>
      {/* {cardsData.map((card, id) => ( */}
        <div className="parentContainer" >
          {/* <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            // png={card.png}
            series={card.series}
          /> */}
        </div>
      {/* ))} */}
    </CardsStyle>
  );
}
