import { Story } from "@storybook/react";
import { Footer, footerInterface } from "./Footer";

export default {
  title: "Organisms/Footer",
  component: Footer,
};

const Template = ({ children, ...args }: footerInterface) => (
  <Footer {...args}>{children}</Footer>
);

export const DefaultFooter: Story = Template.bind({});
DefaultFooter.args = {
  children: "click me",
  type: "default",
};