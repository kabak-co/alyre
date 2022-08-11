import { Navigation } from "../../molecules/Navigation/Navigation";
import { Link } from "../../atoms/Link/Link";

const Header = ({ children }, props) => {
  let isLoggedIn = false;

  return (
    <header className="flex justify-between items-center" {...props}>
      <h1>Alyre</h1>
      <Navigation>
        <Link href="../pages/Home/Home">Accueil</Link>
        <Link href="../pages/Profil/Profil">Profil</Link>
        <Link href="../pages/Livres/Livres">Livres</Link>
        <Link href="../pages/Auteurs/Auteurs">Auteurs</Link>
        <Link href="../pages/Compte/Compte">Mon compte</Link>
        <Link href="../pages/Connexion/Connexion">
          {
            isLoggedIn 
              ? "S'inscrire" 
              : "Se connecter"
          }
        </Link>
      </Navigation>
    </header>
  );
};

export { Header };
