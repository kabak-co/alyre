import { Navigation } from "../../molecules/Navigation/Navigation";
import { Link } from "../../atoms/Link/Link";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";

export interface footerInterface extends GlobalChildren {};

const Footer = (props: footerInterface) => {
  return (
    <footer className="flex justify-between items-center" {...props}>
      <p>©Alyre</p>
      <Navigation>
        <Link hrefLink="../pages/Home/Home">Accueil</Link>
        <Link hrefLink="../pages/Profil/Profil">Profil</Link>
        <Link hrefLink="../pages/Livres/Livres">livres</Link>
        <Link hrefLink="../pages/Auteurs/Auteurs">auteurs</Link>
        <Link hrefLink="../pages/Compte/Compte">mon compte</Link>
        <Link hrefLink="../pages/Connexion/Connexion">s'inscrire / se connecter</Link>
      </Navigation>
    </footer>
  );
};

export { Footer };