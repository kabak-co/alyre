import { Link } from "react-router-dom";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import Book from "./Book";
import BookCover from "components/molecules/BookCover/BookCover";
import { useEffect, useState } from "react";

interface bookInterface extends GlobalChildren {
  author: Array<string>;
  editor: string;
  noPage: number;
  _id: string;
  imageUrl: string;
  isbn: string;
  releaseDate: string;
  summary: string;
  title: string;
}

const Books = () => {
  const [books, setBooks] = useState<Array<bookInterface> | undefined>(undefined);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchBookHandler = async () => {
      try {
        const response = await fetch(`http://localhost:8080/library/library`);
        const data = await response.json();
        setBooks(data.books);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }

    };
    fetchBookHandler();
  }, []);
  return books && !isLoading ? (
    <div className="w-full">
      <h1>Bibliothèque de livres</h1>
      <div className="flex grow justify-stretch gap-4 my-0 mx-auto flex-wrap">
        {books.map((book, index) => (
          // <Link key={index} to={`/book/${id}`}>
          <BookCover key={index} list id={book._id} imageUrl={book.imageUrl} imageWidth="full" imageHeigth="400px" />
          /* </Link> */
        ))}
      </div>

    </div>
  ) : (
    <div>
      <h1>Bibliothèque de livres</h1>
      <p>No books fetched</p>
    </div>
  );
};

export default Books;