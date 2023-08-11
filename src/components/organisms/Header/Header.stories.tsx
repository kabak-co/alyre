import { Header, headerTypes } from "./Header";
import { Story } from "@storybook/react";

export default {
  title: "Organisms/Header",
  component: Header,
};

const Template = ({children, ...args}: headerTypes) => (
  <Header {...args}>{children}</Header>
);

export const DefaultHeader: Story = Template.bind({});
DefaultHeader.args = {
  children: `<li>test</li>`,
};