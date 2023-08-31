import { Link } from "react-router-dom";

const SignIn = () => {

    return (
        <div>
            <h1 className="m-6 text-4xl">Sign In</h1>
            <p className="m-6">You do not have an Alyre account? <Link className="underline text-cyan-600" to={'/signup'}>Sign Up</Link></p>
            <div className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input className="my-4 text-slate-500" type="text" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input className="my-4 text-slate-500" type="text" name="password" id="password" />
                <button className="my-6 bg-cyan-600 rounded-md">Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;