import star from "../../../assets/star.png";
import heart from "../../../assets/heart.png"
import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface reviewTypes extends GlobalChildren {
    imageUrl: string;
    title: string;
    content: string;
    nbLike: number;
}
const ProfileReviews = (props: reviewTypes) => {
    let starsElement: Array<any> = [];
    for (let intCptElement: number = 0; intCptElement < 5; intCptElement++) {
        starsElement.push(<img className="h-7" src={star} alt="star" />)
    }
    return (
        <div className="flex items-center border-y-2 mx-5 w">
            <img className="rounded-md m-4 w-1/6" src={props.imageUrl} alt={props.title} />
            <div>
                <div className="flex justify-between w-full">
                    <h3 className="justify-start text-2xl m-2">{props.title}</h3>
                    <div className="flex justify-self-end m-2">
                        {starsElement}
                    </div>
                </div>
                <p className="text-xl my-8">{props.content}</p>
                <p className="flex text-left"><img className="mx-2" src={heart} alt="heart" /> {props.nbLike} likes</p>
            </div>
        </div>
    );
}

export default ProfileReviews;