import { Navigation } from "./Navigation";

export default {
  title: "molecules/Navigation",
  component: Navigation,
};

const Template = ({ children, ...args }) => (
  <Navigation {...args}>{children}</Navigation>
);

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  link: "https://www.journaldequebec.com",
  type: "default",
};
