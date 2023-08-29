import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isError, setIsError] = useState(false);
    const [errorArray, setErrorArray] = useState<Array<string>>([]);

    const saveAccount = async () => {
        const usernameElement = document.getElementById('username') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const passwordElement = document.getElementById('password') as HTMLInputElement;
        const confirmPasswordElement = document.getElementById('confirmPassword') as HTMLInputElement;

        let errorMessages: Array<string> = [];

        const data = {
            username: usernameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
            confirmPassword: confirmPasswordElement.value
        };

        if (!data.username) {
            usernameElement.style.border = '0.3rem solid red';
            errorMessages.push('You have to enter a username');
        }
        if (!data.email) {
            emailElement.style.border = '0.3rem solid red';
            errorMessages.push('You have to enter an email');
        }
        if (!data.password) {
            passwordElement.style.border = '0.3rem solid red';
            errorMessages.push('You have to enter a password');
        }
        if (!data.confirmPassword) {
            confirmPasswordElement.style.border = '0.3rem solid red';
            errorMessages.push('You have to enter your password a second time');
        }

        if (errorMessages.length === 0) {
            try {
                const response = await fetch('http://localhost:8080/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            } catch (err) {
                console.log(err);
            }
        } else {
            setIsError(true);
            setErrorArray(errorMessages);
        }
    };

    return (
        <div>
            {isError &&
                <div className="bg-red-700/30 border-2 border-red-600 rounded-md p-4 m-4">
                    <h2>There is some errors</h2>
                    <ul>
                        {errorArray.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>}
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