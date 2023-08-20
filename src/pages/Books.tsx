import { Link } from "react-router-dom";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import Book from "./Book";

interface booksInterface extends GlobalChildren {
  // book: [];
}
const id: string = "64d3b8c13ebcb6efde5a0b07";
const Books = (props: booksInterface) => {
  return (
    <div>
      <h1>Bibliothèque de livres</h1>
      <button><Link to={`/book/${id}`}>book</Link></button>
    </div>
  );
};

export default Books;