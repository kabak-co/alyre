import BookCover from "components/molecules/BookCover/BookCover";
import { useEffect, useState } from "react";
import { BooksInterface } from "components/templates/Book.interface";

interface bookTypes extends BooksInterface { };

const Books = () => {
  const [books, setBooks] = useState<Array<bookTypes> | undefined>(undefined);
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
          <BookCover key={index} list id={book._id} imageUrl={book.imageUrl} imageWidth="full" imageHeight="400px" />
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