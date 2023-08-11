import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface authorInterface extends GlobalChildren {
  // books: [];
  // fullName: string;
}
const Author = (props: authorInterface) => {
  return (
    <div>
      Authors
    </div>
  );
};

export default Author;