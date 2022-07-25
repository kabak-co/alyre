import { Navigation } from "./Navigation";
import { Link } from "../../atoms/Link/Link";


export default {
  title: "molecules/Navigation",
  component: Navigation,
};

const Template = ({ children, ...args }) => (
  <Navigation {...args}>
    {children}
     <Link href={args.link}>Accueil</Link>
     <Link href="apple.com">Profil</Link>
     <Link href="apple.com">Lien 3</Link>
  </Navigation>
);

export const Default = Template.bind({});
Default.args = {
  link: "https://www.journaldequebec.com",
  type: "default",
};
