import { Navigation, navigationInterface } from "./Navigation";
import { Link } from "../../atoms/Link/Link";
import { Story } from "@storybook/react";

export default {
  title: "Molecules/Navigation",
  component: Navigation,
};

const Template = ({ children, ...args }: navigationInterface) => (
  <Navigation {...args}>
    {children}
    <Link hrefLink="../pages/Home/Home">Accueil</Link>
    <Link hrefLink="../pages/Profil/Profil">Profil</Link>
    <Link hrefLink="../pages/Livres/Livres">livres</Link>
    <Link hrefLink="../pages/Auteurs/Auteurs">auteurs</Link>
    <Link hrefLink="../pages/Compte/Compte">mon compte</Link>
    <Link hrefLink="../pages/Connexion/Connexion">s'inscrire / se connecter</Link>
  </Navigation>
);

export const DefaultNavigation: Story = Template.bind({});
DefaultNavigation.args = {
  link: "https://www.journaldequebec.com",
  type: "default",
};
