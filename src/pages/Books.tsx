import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface booksInterface extends GlobalChildren {
  // book: [];
}
const Books = (props: booksInterface) => {
  return (
    <div>
      Bibliothèque de livres
    </div>
  );
};

export default Books;