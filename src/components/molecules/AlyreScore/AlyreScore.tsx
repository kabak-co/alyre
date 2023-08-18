const AlyreScore = () => {
    interface starInterface {
        id: string;
        purcentage: number;
    }
    const starReviews: Array<starInterface> = [
        { id: '5', purcentage: 74 },
        { id: '4', purcentage: 54 },
        { id: '3', purcentage: 24 },
        { id: '2', purcentage: 5 },
        { id: '1', purcentage: 14 },
    ];
    return (
        <div className="flex flex-col items-center rounded-md border-4 w-4/5 m-5">
            <h3>Alyre Score</h3>
            <div className="flex flex-col items-center w-4/5">
                {starReviews.map((review, index) => {
                    return <div key={index} className="w-full">
                        <p>{review.id} stars</p>
                        <div className="review-container rounded-md bg-slate-600 h-3 p-0 mb-5">
                            <div className="star-quantity"></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}
export default AlyreScore;