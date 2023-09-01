import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [isError, setIsError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<Array<string>>([]);

    const verifyData = (value: string, regex: RegExp): boolean => {
        return regex.test(value);
    };

    const logIn = () => {
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const passwordElement = document.getElementById('password') as HTMLInputElement;

        let errorMessages: Array<string> = [];

        const data = {
            email: emailElement.value,
            password: passwordElement.value
        };

        if (!data.email) {
            emailElement.style.border = '0.3rem solid red';
            errorMessages.push('You have to enter an email');
        } else {
            if (!verifyData(data.email, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                emailElement.style.border = '0.3rem solid red';
                errorMessages.push('The email is invalid');
            }
        }
        if (!data.password) {
            emailElement.style.border = '0.3rem solid red';
            errorMessages.push('You have to enter a password');
        } else {
            if (!verifyData(data.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)) {
                passwordElement.style.border = '0.3rem solid red';
                errorMessages.push('The password is invalid');
            }
        }

    };
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