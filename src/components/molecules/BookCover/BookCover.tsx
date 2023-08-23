import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import bookClose from '../../../assets/book-closed.png';
import bookOpen from '../../../assets/open-book.png';
import likedHeart from '../../../assets/heart_blue.png';
import notLikedHeart from '../../../assets/heart.png';
import addedToList from '../../../assets/add-library.png';
import notInList from '../../../assets/library.png'
import { useState } from "react";
import { Link } from "react-router-dom";

interface BookCoverInterface extends GlobalChildren {
    id: string;
    imageUrl: string;
    imageWidth: string;
    imageHeight: string;
    list: boolean;
}

const BookCover = ({ id, imageUrl, imageHeight, imageWidth, list }: BookCoverInterface) => {
    const elementImg = { book: { closed: bookClose, open: bookOpen } }
    const [bookImg, setBookImg] = useState(bookClose);
    const [heartImg, setHeartImg] = useState(notLikedHeart);
    const [readListImg, setReadListImg] = useState(notInList);

    const toggleButton = (event: any) => {
        event.preventDefault();
        const element = event.currentTarget;

        const elementClassList = element!.classList;

        if (element?.classList.contains('closed')) {
            element!.style.color = "#2BBDE1";
            elementClassList.add('open');
            elementClassList.remove('closed');
            if (element!.id.includes('book')) {
                setBookImg(bookOpen);
            }
            if (element!.id.includes('heart')) {
                setHeartImg(likedHeart);
            }
            if (element!.id.includes('readList')) {
                setReadListImg(addedToList);
            }
        } else {
            element!.style.color = "#FFFFFF";
            elementClassList.remove('open');
            elementClassList.add('closed');
            if (element!.id.includes('book')) {
                setBookImg(bookClose);
            }
            if (element!.id.includes('heart')) {
                setHeartImg(notLikedHeart);
            }
            if (element!.id.includes('readList')) {
                setReadListImg(notInList);
            }
        }
    };

    const componentContent = (<div className="flex justify-around absolute rounded-lg inset-x-0 bottom-0 bg-slate-600 opacity-80 h-32">
        <button id={`book-${id}`} className="closed flex flex-col items-center justify-center" onClick={toggleButton.bind(this)}>
            <img src={bookImg} alt="closed book" />
            <p>read</p>
        </button>
        <button id={"heart-" + id} className="closed flex flex-col items-center justify-center" onClick={toggleButton.bind(this)}>
            <img src={heartImg} alt="closed heart" />
            <p>like</p>
        </button>
        <button id={"readList-" + id} className="closed flex flex-col items-center justify-center" onClick={toggleButton.bind(this)}>
            <img src={readListImg} alt="closed read list" />
            <p>read list</p>
        </button>
    </div>);

    return list ? (
        <Link to={`/book/${id}`} className="relative rounded-lg" style={{ height: imageHeight, flexBasis: list ? '17%' : 'auto', backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat', width: '50%' }}>
            {componentContent}
        </Link>
    ) : (
        <div className="relative rounded-lg" style={{ height: imageHeight, flexBasis: list ? '17%' : 'auto', backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat', width: '50%' }}>
            {componentContent}
        </div>
    );
}

export default BookCover;