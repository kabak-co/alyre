import { Link } from "react-router-dom";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import Book from "./Book";
import BookCover from "components/molecules/BookCover/BookCover";

interface booksInterface extends GlobalChildren {
  // book: [];
}
const id: string = "64d3b8c13ebcb6efde5a0b07";
const Books = (props: booksInterface) => {
  const booksArray = [
    {
      title: 'Lord of the Ring',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      id: '64d3b8c13ebcb6efde5a0b07'
    },
    {
      title: 'Game of Thrones',
      imageUrl: 'https://m.media-amazon.com/images/I/51ffB22hWxL.jpg',
      id: '64d3b8c13ebcb6efde5a0b07'
    },
    {
      title: 'Harry Potter',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg',
      id: '64d3b8c13ebcb6efde5a0b07'
    },
    {
      title: 'Ready Player One',
      imageUrl: 'https://m.media-amazon.com/images/I/91Be3OR3f8L._AC_UF1000,1000_QL80_.jpg',
      id: '64d3b8c13ebcb6efde5a0b07'
    },
    {
      title: 'Narnia',
      imageUrl: 'https://m.media-amazon.com/images/I/51YHiA0Z3AL._AC_UF1000,1000_QL80_.jpg',
      id: '64d3b8c13ebcb6efde5a0b07'
    },
    {
      title: 'Dune',
      imageUrl: 'https://cdn.kobo.com/book-images/7cdf60e0-c47b-498b-842d-eb8c094ef77e/1200/1200/False/dune-2.jpg',
      id: '64d3b8c13ebcb6efde5a0b07'
    },
    {
      title: 'Assassin Royal',
      imageUrl: 'https://www.recyclivre.com/media/cache/sylius_shop_product_original/a1/93/3fe3060fffe5de9b35c3d29240f2.jpg',
      id: '64d3b8c13ebcb6efde5a0b07'
    }
  ]
  return (
    <div className="w-full">
      <h1>Bibliothèque de livres</h1>
      <div className="flex grow justify-stretch gap-4 my-0 mx-auto flex-wrap">
        {booksArray.map((book, index) => (
          // <Link key={index} to={`/book/${id}`}>
          <BookCover recommended imageUrl={book.imageUrl} imageWidth="full" imageHeigth="400px" />
          /* </Link> */
        ))}
      </div>

    </div>
  );
};

export default Books;