import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    display: {
      options: ["block", "flex"],
      control: "select",
    },
    color: { control: "color" },
    padding: { control: "text" },
    width:{control:"number"},
    height:{control:"number"},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), label: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    borderColor: "",
    borderRadius: 5,
    borderWidth: 5,
    borderStyle: "solid",
    display: "block",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
};

export const Submit: Story = {
  args: {
    label: "ورود | ثبت نام",
    primary: true,
    borderColor: "#d0d0d0",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    size: "large",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    color: "#0b0a0a",
    padding: "10px 15px",
    width: 135,
    height: 40
  },
};
