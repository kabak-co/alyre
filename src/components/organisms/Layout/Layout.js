import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink
} from "react-router-dom";

import { Header } from "../Header/Header";
import { Navigation } from "../../molecules/Navigation/Navigation";
import { Profile, Author, Books, Home, Settings } from "../../../pages";


const Layout = props => {
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
            <RouterLink to="/">{
              isLoggedIn
                ? "S'inscrire"
                : "Se connecter"
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
          <Route exact path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/books" element={<Books />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;