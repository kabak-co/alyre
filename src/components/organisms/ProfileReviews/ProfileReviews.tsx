import star from "../../../assets/star.png";
import heart from "../../../assets/heart.png"
const ProfileReviews = () => {
    let starsElement: Array<any> = [];
    for (let intCptElement: number = 0; intCptElement < 5; intCptElement++) {
        starsElement.push(<img className="h-7" src={star} alt="star" />)
    }
    return (
        <div className="flex items-center border-y-2 mx-5 w">
            <img className="rounded-md m-4 w-1/6" src="https://images.squarespace-cdn.com/content/v1/5c71c7d8aadd342945360ba1/1586723509001-E5NQB7VLS1R9NS0EOSOM/Harry+Potter+and+the+Philosopher%27s+Stone+Original+Children%27s+Edition+Cover.jpg" alt="harry potter" />
            <div>
                <div className="flex justify-between w-full">
                    <h3 className="justify-start text-2xl m-2">Harry Potter and the Philosopher Stone</h3>
                    <div className="flex justify-self-end m-2">
                        {starsElement}
                    </div>
                </div>
                <p className="text-xl my-8">This Book is wunderful. But it makes me kind of sad too beacause I wonder where is my Hogwarts letter or the one from the magical school closer from my place</p>
                <p className="flex text-left"><img className="mx-2" src={heart} alt="heart" /> 20 likes</p>
            </div>
        </div>
    );
}

export default ProfileReviews;