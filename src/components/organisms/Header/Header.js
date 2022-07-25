import { Navigation } from "../../molecules/Navigation/Navigation";
import { Link } from "../../atoms/Link/Link";

const Header = ({ children }, props) => {
  return (
    <header className="flex justify-between items-center" {...props}>
      <h1>Alyre</h1>
      <Navigation>
        <Link href={props.link}>Accueil</Link>
        <Link href="apple.com">Profil</Link>
        <Link href="apple.com">livres</Link>
        <Link href="apple.com">auteurs</Link>
        <Link href="apple.com">mon compte</Link>
        <Link href="apple.com">s'inscrire / se connecter</Link>
      </Navigation>
    </header>
  );
};

export { Header };
