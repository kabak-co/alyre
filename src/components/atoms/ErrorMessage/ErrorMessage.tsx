import { GlobalChildren } from "components/templates/GlobalChildren.interface";

interface errorInterface extends GlobalChildren {
    errorArray: Array<string>;
}

const ErrorMessage = ({ errorArray }: errorInterface) => {
    return (
        <div className="bg-red-700/30 border-2 border-red-600 rounded-md p-4 m-4">
            <h2>Sorry, it seems like there is a mistake</h2>
            <ul>
                {errorArray.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
};

export default ErrorMessage;