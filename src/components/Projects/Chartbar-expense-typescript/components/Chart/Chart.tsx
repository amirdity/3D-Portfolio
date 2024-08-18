import styled from "styled-components";
import ChartBar from "./ChartBar";
type Props = {
  dataPoints: {
    label: string;
    value: number;
  }[];
};
const StyledChart = styled.div.attrs<{ varient: "outline" }>((props) => ({
  type: "button",
  varient: props.varient
}))`
  padding: 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.varient === "outline" ? "#f8dfff" : "blue"};
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`
const Chart = (props: Props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <StyledChart varient="outline">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </StyledChart>
  );
};

export default Chart;
