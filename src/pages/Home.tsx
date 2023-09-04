import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import alyreLogo from "../assets/alyre.png";

interface homeTypes extends GlobalChildren {
  // book: [];
  // news: {};
};
const Home = (props: homeTypes) => {
  return (
    <div>
      <h1 className="flex items-center text-3xl">Welcome to <img className="m-2" src={alyreLogo} alt="logo" /></h1>
      <div>
        <h2>Les livres populaires du moment</h2>
      </div>
      <div>
        <h2>Les dernières sorties</h2>
      </div>
      <div>
        <h2>Vos amis ont lu dernièrement</h2>
      </div>
      <div>
        <h2>Les livres que vos amis préfère</h2>
      </div>

    </div>
  );
};


export default Home;