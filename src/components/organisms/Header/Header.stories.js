import { Header } from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
};

const Template = ({ children, ...args }) => (
  <Header {...args}>{children}</Header>
);

export const Default = Template.bind({});
Default.args = {
  children: "click me",
  type: "default",
};