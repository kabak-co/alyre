import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface bookInterface extends GlobalChildren {
  author: string;
  title: string;
}
const Book = (props: bookInterface) => {
  return (
    <div>
      Book - Fiche de livre
    </div>
  );
};

export default Book;