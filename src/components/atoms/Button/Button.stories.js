import { Button } from "./Button";
import "./Button.module.css";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  type: "default",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me",
  type: "primary",
};
