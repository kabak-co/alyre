import { Link } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
};

const Template = ({ children, ...args }) => (
  <Link {...args}>{children}</Link>
);

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  href: "https://www.journaldequebec.com",
  type: "default",
};