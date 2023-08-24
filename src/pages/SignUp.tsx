const SignUp = () => {
    return (
        <div>
            <h1 className="text-4xl">Sign up</h1>
            <p>You already have an account? </p>
            <div>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" id="username" />
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">password : </label>
                <input type="text" name="password" id="password" />
                <label htmlFor="confirmPassword">Confirm password : </label>
                <input type="text" name="confirmPassword" id="confirmPassword" />
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;