import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface homeTypes extends GlobalChildren {
  // book: [];
  // news: {};
};
const Home = (props: homeTypes) => {
  return (
    <div>
      Home
      <p>Header</p>
    </div>
  );
};


export default Home;