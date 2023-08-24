import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <Link to={'/signup'}>Sign Up</Link>
        </div>
    );
};

export default SignIn;