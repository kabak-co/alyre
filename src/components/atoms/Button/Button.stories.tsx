import { Story } from "@storybook/react";
import { Button, buttonInterface } from "./Button";
import "./Button.module.css";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = ({ children, ...args }: buttonInterface) => (
  <Button {...args}>{children}</Button>
);

export const Default: Story = Template.bind({});
Default.args = {
  children: "Click me",
  type: "default",
};

export const Primary: Story = Template.bind({});
Primary.args = {
  children: "Click me",
  type: "primary",
};
