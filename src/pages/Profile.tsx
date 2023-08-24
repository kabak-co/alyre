import ProfileReviews from "components/organisms/ProfileReviews/ProfileReviews";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import { Link } from "react-router-dom";

interface profileTypes extends GlobalChildren {
  profileImage: string;
  username: string;
};


const Profile = (props: profileTypes) => {
  const lastReviews = [
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
      title: "Harry Potter and the Philosophers Stone",
      reviewContent: "This Book is wunderful. But it makes me kind of sad too beacause I wonder where is my Hogwarts letter or the one from the magical school closer from my place",
      nbLike: 5
    },
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
      title: "Harry Potter and the Philosophers Stone",
      reviewContent: "This Book is wunderful. But it makes me kind of sad too beacause I wonder where is my Hogwarts letter or the one from the magical school closer from my place",
      nbLike: 15
    },
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
      title: "Harry Potter and the Philosophers Stone",
      reviewContent: "This Book is wunderful. But it makes me kind of sad too beacause I wonder where is my Hogwarts letter or the one from the magical school closer from my place",
      nbLike: 5
    }
  ];
  const mostLikedReviews = [
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
      title: "Harry Potter and the Philosophers Stone",
      reviewContent: "This Book is wunderful. But it makes me kind of sad too beacause I wonder where is my Hogwarts letter or the one from the magical school closer from my place",
      nbLike: 135
    },
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
      title: "Harry Potter and the Philosophers Stone",
      reviewContent: "This Book is wunderful. But it makes me kind of sad too beacause I wonder where is my Hogwarts letter or the one from the magical school closer from my place",
      nbLike: 65
    },
    {
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg",
      title: "Harry Potter and the Philosophers Stone",
      reviewContent: "This Book is wunderful. But it makes me kind of sad too beacause I wonder where is my Hogwarts letter or the one from the magical school closer from my place",
      nbLike: 56
    }
  ];
  return (
    <div>
      <h1 className="text-4xl m-5">Antoine Cadoret</h1>
      <div className="flex justify-around items-center">
        <img className="w-24 m-50 rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="profil picture" />
        <div className="m-5">
          <p>455</p>
          <p>books read</p>
        </div>
        <div className="m-5">
          <p>30</p>
          <p>this year</p>
        </div>
        <div className="m-5">
          <p>45</p>
          <p>read list</p>
        </div>
        <div className="m-5">
          <p>10</p>
          <p>following</p>
        </div>
        <div className="m-5">
          <p>15</p>
          <p>followers</p>
        </div>
      </div>
      <div className="my-6">
        <h2 className="text-3xl m-4">Your favorites books</h2>
        <div className="flex justify-around">
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
        </div>
      </div>
      <div className="my-6">
        <h2 className="text-3xl m-4">Your most recent books read</h2>
        <div className="flex justify-around">
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
          <Link className="w-1/6" to={`/book/64e49e71dcb8f19bc619fb67`}>
            <img className="rounded-md" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-3xl m-12">Your lasts Alyre reviews</h2>
        {lastReviews.map((review, index) => (
          <ProfileReviews key={index} imageUrl={review.imageUrl} title={review.title} content={review.reviewContent} nbLike={review.nbLike} />
        ))}
      </div>
      <div>
        <h2 className="text-3xl m-12">Your most liked reviews</h2>
        {mostLikedReviews.map((review, index) => (
          <ProfileReviews key={index} imageUrl={review.imageUrl} title={review.title} content={review.reviewContent} nbLike={review.nbLike} />
        ))}
      </div>
    </div>
  );
};

export default Profile;