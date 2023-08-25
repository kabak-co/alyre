import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isError, setIsError] = useState(false);

    const saveAccount = async () => {
        const usernameElement = document.getElementById('username') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const passwordElement = document.getElementById('password') as HTMLInputElement;
        const confirmPasswordElement = document.getElementById('confirmPassword') as HTMLInputElement;

        const formData = new FormData();
        formData.append('username', usernameElement.value);
        formData.append('email', emailElement.value);
        formData.append('password', passwordElement.value);
        formData.append('confirmPassword', confirmPasswordElement.value);


        try {
            const response = await fetch(`http://localhost:8080/signup`, {
                method: 'PUSH',
                body: formData
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1 className="m-6 text-4xl">Sign up</h1>
            <p className="m-6">You already have an account? <Link className="underline text-cyan-600" to={'/signin'}>Sign In</Link></p>
            <div className="flex flex-col">
                <label htmlFor="username">Username : </label>
                <input className="my-4 text-slate-500" type="text" name="username" id="username" />
                <label htmlFor="email">Email : </label>
                <input className="my-4 text-slate-500" type="text" name="email" id="email" />
                <label htmlFor="password">password : </label>
                <input className="my-4 text-slate-500" type="text" name="password" id="password" />
                <label htmlFor="confirmPassword">Confirm password : </label>
                <input className="my-4 text-slate-500" type="text" name="confirmPassword" id="confirmPassword" />
                <button onClick={() => saveAccount()} className="my-6 bg-cyan-600 rounded-md">Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;