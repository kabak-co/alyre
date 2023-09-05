import BookCover from "components/molecules/BookCover/BookCover";
import alyreLogo from "../assets/alyre.png";
import { BooksInterface } from "components/templates/Book.interface";
import { Link } from "react-router-dom";

const Home = () => {
  const imageProposedBook = 'https://static.fnac-static.com/multimedia/Images/FR/NR/41/27/19/1648449/1507-1/tsp20230104070042/Le-Seigneur-des-Anneaux-tome-1-La-Fraternite-de-l-Anneau.jpg';
  const popularBooks: Array<BooksInterface> = [
    {
      _id: '6abcyey',
      title: 'Harry',
      author: ['JK'],
      editor: 'Payette',
      noPage: 800,
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg',
      isbn: '978-2070541270',
      releaseDate: new Date('1997-06-26').toDateString(),
      summary: "Un moldu devient un sorcier"
    },
    {
      _id: '7bcgwhw',
      title: 'Frodo',
      author: ['JRR'],
      editor: 'fireworks',
      noPage: 1200,
      imageUrl: 'https://static.fnac-static.com/multimedia/Images/FR/NR/41/27/19/1648449/1507-1/tsp20230104070042/Le-Seigneur-des-Anneaux-tome-1-La-Fraternite-de-l-Anneau.jpg',
      isbn: '978-2070541270',
      releaseDate: new Date('1997-06-26').toDateString(),
      summary: "Un moldu devient un sorcier"
    },
    {
      _id: '7bcgwhw',
      title: 'Frodo',
      author: ['JRR'],
      editor: 'fireworks',
      noPage: 1200,
      imageUrl: 'https://static.fnac-static.com/multimedia/Images/FR/NR/41/27/19/1648449/1507-1/tsp20230104070042/Le-Seigneur-des-Anneaux-tome-1-La-Fraternite-de-l-Anneau.jpg',
      isbn: '978-2070541270',
      releaseDate: new Date('1997-06-26').toDateString(),
      summary: "Un moldu devient un sorcier"
    },
    {
      _id: '7bcgwhw',
      title: 'Frodo',
      author: ['JRR'],
      editor: 'fireworks',
      noPage: 1200,
      imageUrl: 'https://static.fnac-static.com/multimedia/Images/FR/NR/41/27/19/1648449/1507-1/tsp20230104070042/Le-Seigneur-des-Anneaux-tome-1-La-Fraternite-de-l-Anneau.jpg',
      isbn: '978-2070541270',
      releaseDate: new Date('1997-06-26').toDateString(),
      summary: "Un moldu devient un sorcier"
    },
    {
      _id: '7bcgwhw',
      title: 'Frodo',
      author: ['JRR'],
      editor: 'fireworks',
      noPage: 1200,
      imageUrl: 'https://static.fnac-static.com/multimedia/Images/FR/NR/41/27/19/1648449/1507-1/tsp20230104070042/Le-Seigneur-des-Anneaux-tome-1-La-Fraternite-de-l-Anneau.jpg',
      isbn: '978-2070541270',
      releaseDate: new Date('1997-06-26').toDateString(),
      summary: "Un moldu devient un sorcier"
    }
  ];
  return (
    <div className="w-full">
      <h1 className="flex items-center justify-center text-3xl font-bold">Welcome to <img className="m-2" src={alyreLogo} alt="logo" /></h1>
      <div>
        <h2>This month popular books</h2>
        <div className="flex justify-around my-4">
          {popularBooks.map((book, index) => (
            <BookCover list key={index} id={index.toString()} imageUrl={book.imageUrl} imageWidth="full" imageHeight="500px" />
          ))}
        </div>

      </div>
      <div>
        <h2>New Relaeses</h2>
        <div className="flex justify-around my-4">
          {popularBooks.map((book, index) => (
            <BookCover list key={index} id={index.toString()} imageUrl={book.imageUrl} imageWidth="full" imageHeight="500px" />
          ))}
        </div>
      </div>
      <div>
        <h2>Your friends have recently read</h2>
        <div className="flex justify-around my-4">
          {popularBooks.map((book, index) => (
            <BookCover list key={index} id={index.toString()} imageUrl={book.imageUrl} imageWidth="full" imageHeight="500px" />
          ))}
        </div>
      </div>
      <div>
        <h2>Your friends favorites</h2>
        <div className="flex justify-around my-4">
          {popularBooks.map((book, index) => (
            <BookCover list key={index} id={index.toString()} imageUrl={book.imageUrl} imageWidth="full" imageHeight="500px" />
          ))}
        </div>
      </div>
      <div>
        <h2>The latest Alyre book of the week</h2>
        {/* style={{ height: 5rem, backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat', width: '50%' }} */}
        <Link to={`/book/0`} className="flex justify-center">
          <img src={imageProposedBook} alt="book cover" className="relative rounded-md" />
          <h3 className="absolute text-2xl font-bold my-5">Lord of the Ring</h3>
        </Link>
      </div>
      <div>
        <h2>Popular reviews</h2>
      </div>
    </div>
  );
};


export default Home;