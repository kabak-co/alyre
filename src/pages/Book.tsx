import AlyreScore from "components/molecules/AlyreScore/AlyreScore";
import BookCover from "components/molecules/BookCover/BookCover";
import BookReviews from "components/organisms/BookReviews/BookReviews";
import { BooksInterface } from "components/templates/Book.interface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const [book, setBook] = useState<BooksInterface | undefined>(undefined);
  const [isLoading, setIsloading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchBookHandler = async () => {
      try {
        const response = await fetch(`http://localhost:8080/library/book/${params.bookId}`);
        const data = await response.json();
        setBook(data.book);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }

    };
    fetchBookHandler();
  }, []);

  const recommendedBooks = [
    {
      imageUrl: "https://m.media-amazon.com/images/I/51ffB22hWxL.jpg"
    },
    {
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg'
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/91Be3OR3f8L._AC_UF1000,1000_QL80_.jpg'
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/51YHiA0Z3AL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      imageUrl: 'https://cdn.kobo.com/book-images/7cdf60e0-c47b-498b-842d-eb8c094ef77e/1200/1200/False/dune-2.jpg'
    }
  ]

  // const book: bookInterface = {
  //   _id: '6abcyey',
  //   title: 'Harry',
  //   author: ['JK'],
  //   editor: 'Payette',
  //   noPage: 800,
  //   imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg',
  //   isbn: '978-2070541270',
  //   releaseDate: new Date('1997-06-26'),
  //   summary: "Un moldu devient un sorcier"
  // };

  return book && !isLoading ? (
    <div className="w-full">
      <div className="flex w-full m-5">
        {/* <img className="w-5/12 rounded-md" src={book.imageUrl} alt={book.title} /> */}
        <BookCover list={false} id={book._id} imageUrl={book.imageUrl} imageWidth="w-full" imageHeight="600px" />
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl">{book.title}</h1>
          <h2 className="mt-2"> by {book.author}</h2>
          <p className="mt-2">Editor: {book.editor}</p>
          <p className="mt-2">isbn : {book.isbn} </p>
          <p className="mt-2">Release : {book.releaseDate}</p>
          <p className="mt-2">Number of pages : {book.noPage}</p>

          <AlyreScore />
        </div>
      </div>
      <p>{book.summary}</p>
      <div>
        <h3>Alyre thinks you will like those books too:</h3>
        <div className="flex">
          {recommendedBooks.map((book, index) => (
            <BookCover list key={index} id={index.toString()} imageUrl={book.imageUrl} imageWidth="full" imageHeight="300px" />
          ))}
        </div>

      </div>
      <BookReviews />
    </div>
  ) : (
    <p>no book fetched</p>
  );
};

export default Book;