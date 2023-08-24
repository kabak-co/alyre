import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink
} from "react-router-dom";

import { Header } from "../Header/Header";
import { Navigation } from "../../molecules/Navigation/Navigation";
import { Profile, Author, Books, Home, Settings, Book, SignIn, SignUp } from "../../../pages";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface layoutInterface extends GlobalChildren { };
const Layout = (props: layoutInterface) => {
  let isLoggedIn = false;

  return (
    <BrowserRouter>
      <Header>
        <Navigation>
          <li>
            <RouterLink to="/">Accueil</RouterLink>
          </li>
          <li>
            <RouterLink to="/profile">Profil</RouterLink>
          </li>
          <li>
            <RouterLink to="/books">Livres</RouterLink>
          </li>
          <li>
            <RouterLink to="/author">Auteurs</RouterLink>
          </li>
          <li>
            <RouterLink to="/settings">Mon compte</RouterLink>
          </li>
          <li>
            <RouterLink to="/signIn">{
              isLoggedIn
                ? "Se déconnecter"
                : "Se connecter / S'inscrire"
            }</RouterLink>
          </li>
          {/* <Routes> looks through all its <Route> elements & 
          renders the first one whose path matches the current 
          URL. Use <Routes> anytime you have multiple routes, 
          but you want only one of them to render at a time
        */}
        </Navigation>
      </Header>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} /> {/*<Route exact path="/" element={<Home />} />  exact est depreciated depuis v.6 de router*/}
          <Route path="/author" element={<Author />} />
          <Route path="/profile" element={<Profile profileImage="this is an image" username="Anto" />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/settings" element={<Settings settingsImage="this is an image" username="Anto" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;