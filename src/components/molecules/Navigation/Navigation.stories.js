import { Navigation } from "./Navigation";
import { Link } from "../../atoms/Link/Link";

export default {
  title: "Molecules/Navigation",
  component: Navigation,
};

const Template = ({ children, ...args }) => (
  <Navigation {...args}>
    {children}
    <Link href="../pages/Home/Home">Accueil</Link>
    <Link href="../pages/Profil/Profil">Profil</Link>
    <Link href="../pages/Livres/Livres">livres</Link>
    <Link href="../pages/Auteurs/Auteurs">auteurs</Link>
    <Link href="../pages/Compte/Compte">mon compte</Link>
    <Link href="../pages/Connexion/Connexion">s'inscrire / se connecter</Link>
  </Navigation>
);

export const Default = Template.bind({});
Default.args = {
  link: "https://www.journaldequebec.com",
  type: "default",
};
