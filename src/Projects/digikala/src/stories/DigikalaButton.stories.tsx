import { ComponentProps } from "react";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Button> &{buttonText:string};
const meta: Meta<StoryProps> = {
  component: Button,
  title: "DigikalaButton",
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: {
        type: "select"
      }
    },
    // variant: {
    //   options: ["primary", "secondary"],
    //   control: {
    //     type:"select"
    //   }
    // }
  }, args: {
    onClick: () => console.log("clicked")
  }
};
export default meta;
type Story = StoryObj<StoryProps>;
export const primery: Story = {
  args: {
    buttonText: "Login",
    // variant: "primary",
    // size: "md",
    // children: "Login",
    onClick: () => console.log("Login clicked"),
  },
  render:({buttonText,...args}) => <Button {...args}>{buttonText}</Button>
};
