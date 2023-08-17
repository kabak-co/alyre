import AlyreScore from "components/molecules/AlyreScore/AlyreScore";
import ScoreForm from "components/molecules/ScoreForm/ScoreForm";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const Book = () => {
  const [book, setBook] = useState<bookInterface | undefined>(undefined);
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

  return book ? (
    <div>
      <div className="flex w-full m-5">
        <img className="w-5/12 rounded-md" src={book.imageUrl} alt={book.title} />
        <div className="flex flex-col items-center w-full">
          <ScoreForm />
          <h1 className="text-3xl">{book.title}</h1>
          <h2 className="mt-2"> by {book.author}</h2>
          <p className="mt-2">Editor: {book.editor}</p>
          <p className="mt-2">isbn : {book.isbn} </p>
          <p className="mt-2">Release : {book.releaseDate}</p>
          <p className="mt-2">Number of pages : {book.noPage}</p>

          <AlyreScore />
        </div>
      </div>
      <p>{book.summary}</p>
    </div>
  ) : (
    <p>no book fetched</p>
  );
};

export default Book;