import { Footer } from "./Footer";

export default {
  title: "Organisms/Footer",
  component: Footer,
};

const Template = ({ children, ...args }) => (
  <Footer {...args}>{children}</Footer>
);

export const Default = Template.bind({});
Default.args = {
  children: "click me",
  type: "default",
};