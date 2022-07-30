import { Navigation } from "../../molecules/Navigation/Navigation";
import { Link } from "../../atoms/Link/Link";

const Footer = ({ children }, props) => {
  return (
    <footer className="flex justify-between items-center" {...props}>
      <p>©Alyre</p>
      <Navigation>
        <Link href="../pages/Home/Home">Accueil</Link>
        <Link href="../pages/Profil/Profil">Profil</Link>
        <Link href="../pages/Livres/Livres">livres</Link>
        <Link href="../pages/Auteurs/Auteurs">auteurs</Link>
        <Link href="../pages/Compte/Compte">mon compte</Link>
        <Link href="../pages/Connexion/Connexion">s'inscrire / se connecter</Link>
      </Navigation>
    </footer>
  );
};

export { Footer };