import { ReactNode } from "react";
type Props = {
  className: string
  children: ReactNode
}
const Card = (props: Props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
