const AlyreScore = () => {
    interface starInterface {
        id: string;
        remSize: string;
    }
    const starReviews: Array<starInterface> = [
        { id: '5', remSize: "74%" },
        { id: '4', remSize: "54%" },
        { id: '3', remSize: "24%" },
        { id: '2', remSize: "5%" },
        { id: '1', remSize: "14%" },
    ];
    return (
        <div className="flex flex-col items-center rounded-md border-4 w-4/5 m-5">
            <h3>Alyre Score</h3>
            <div className="flex flex-col items-center w-4/5">
                {starReviews.map((review, index) => {
                    return <div key={index} className="w-full">
                        <p>{review.id} stars</p>
                        <div className="review-container rounded-md bg-slate-600 h-3 p-0 mb-5">
                            <div className="star-quantity rounded-md bg-cyan-500 h-3" style={{ width: review.remSize }}></div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}
export default AlyreScore;