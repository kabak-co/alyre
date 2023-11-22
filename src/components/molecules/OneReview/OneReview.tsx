import heart from '../../../assets/heart.png';
const OneReview = () => {
    return (
        <div className="flex m-2 w-full bg-slate-700 rounded-md">
            <img className="w-1/4 m-4 rounded-md" src="https://static.fnac-static.com/multimedia/Images/FR/NR/41/27/19/1648449/1507-1/tsp20230104070042/Le-Seigneur-des-Anneaux-tome-1-La-Fraternite-de-l-Anneau.jpg" alt="book" />
            <div className="flex flex-col justify-around">
                <p>De Hakuna Matata</p>
                <div className="w-full flex justify-around">
                    <h4>title</h4>
                    <p>stars</p>
                </div>
                <p className="m-2">This book is excellent! it inspires me so much to travel and discover the world in wich I live in. This is J.R.R. Tolkien greatest work and he is one the best author ever.</p>
                <div className="flex">
                    <button><img src={heart} alt="heart" /></button>
                    <p className="m-3">5 likes</p>
                </div>

            </div>
        </div>
    );
};
export default OneReview;