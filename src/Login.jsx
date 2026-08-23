import { useState } from "react";
import { loginUser, registerUser, getProfile } from "./api";

function Login({ onLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = async () => {

        try {

            const data = await loginUser(
                email,
                password
            );
            
            alert("Login successful!");

const profile = await getProfile();

            
            onLogin();

        } catch (error) {

            alert(error.message);

        }

    };

    const handleRegister = async () => {

    try {

        const data = await registerUser(
            username,
            email,
            password
        );

        console.log(data);

        alert("Registration successful! Please login.");

        setIsRegistering(false);

        setUsername("");
        setEmail("");
        setPassword("");

    } catch (error) {

        alert(error.message);

    }

};

    return (

    <div>

        <h2>
            {isRegistering ? "Create Account" : "Login"}
        </h2>

        {isRegistering && (

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />

        )}

        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
        />

        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
        />

        <button
            onClick={
                isRegistering
                    ? handleRegister
                    : handleLogin
            }
        >
            {isRegistering ? "Register" : "Login"}
        </button>

        <p>

            {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"
            }

            <button
                onClick={() => {
                    setIsRegistering(!isRegistering);
                }}
            >
                {isRegistering ? "Login" : "Register"}
            </button>

        </p>

    </div>

);

}

export default Login;