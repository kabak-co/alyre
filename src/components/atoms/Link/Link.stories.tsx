import { Story } from "@storybook/react";
import { Link, linkInterface } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
};

const Template = ({ children, ...args }: linkInterface) => (
  <Link {...args}>{children}</Link>
);

export const DefaultLink: Story = Template.bind({});
DefaultLink.args = {
  children: "Click me",
  href: "https://www.journaldequebec.com",
  type: "default",
};