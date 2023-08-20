import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import bookClose from '../../../assets/book-closed.png';
import bookOpen from '../../../assets/open-book.png';
import likedHeart from '../../../assets/heart_blue.png';
import notLikedHeart from '../../../assets/heart.png';
import addedToList from '../../../assets/add-library.png';
import list from '../../../assets/library.png'
import { useState } from "react";

interface BookCoverInterface extends GlobalChildren {
    imageUrl: string;
    imageWidth: string;
    recommended: boolean;
}

const BookCover = ({ imageUrl, imageWidth, recommended }: BookCoverInterface) => {
    const elementImg = { book: { closed: bookClose, open: bookOpen } }
    const [bookImg, setBookImg] = useState(bookClose);
    const [heartImg, setHeartImg] = useState(notLikedHeart);
    const [readListImg, setReadListImg] = useState(list);

    const toggleButton = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        const elementClassList = element!.classList;

        if (element?.className.includes('closed')) {
            element!.style.color = "#2BBDE1";
            elementClassList.add('open');
            elementClassList.remove('closed');
            switch (element!.id) {
                case ('book'): setBookImg(bookOpen);
                    break;
                case ('heart'): setHeartImg(likedHeart);
                    break;
                case ('readList'): setReadListImg(addedToList);
                    break;
            }
        } else {
            element!.style.color = "#FFFFFF";
            elementClassList.remove('open');
            elementClassList.add('closed');
            switch (element!.id) {
                case ('book'): setBookImg(bookClose);
                    break;
                case ('heart'): setHeartImg(notLikedHeart);
                    break;
                case ('readList'): setReadListImg(list);
                    break;
            }
        }
    };

    return (
        <div className="relative rounded-lg" style={{ height: recommended ? '300px' : '600px', backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat', width: '50%' }}>
            <div className="flex justify-around absolute rounded-lg inset-x-0 bottom-0 bg-slate-600 opacity-80 h-32">
                <button id="book" className="closed flex flex-col items-center justify-center" onClick={() => toggleButton('book')}>
                    <img src={bookImg} alt="closed book" />
                    <p>read</p>
                </button>
                <button id="heart" className="closed flex flex-col items-center justify-center" onClick={() => toggleButton('heart')}>
                    <img src={heartImg} alt="closed heart" />
                    <p>like</p>
                </button>
                <button id="readList" className="closed flex flex-col items-center justify-center" onClick={() => toggleButton('readList')}>
                    <img src={readListImg} alt="closed read list" />
                    <p>read list</p>
                </button>
            </div>
        </div>
    );
}

export default BookCover;