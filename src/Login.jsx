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
    <div className="auth-page">

        <div className="auth-stars"></div>

        <div className="auth-logo">
            <span>L</span>
            <span className="logo-three">3</span>
            <span>PTARA</span>
        </div>

        <p className="auth-subtitle">
            ENTER THE REALM
        </p>

        <div className="auth-card">

            <h2>
                {isRegistering
                    ? "Create Your Account"
                    : "Welcome Back"}
            </h2>

            <p className="auth-description">
                {isRegistering
                    ? "Begin your journey through the realms."
                    : "Continue your journey through L3PTARA."}
            </p>

            {isRegistering && (
                <div className="input-group">

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Choose your explorer name"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />

                </div>
            )}

            <div className="input-group">

                <label>Email</label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />

            </div>

            <div className="input-group">

                <label>Password</label>

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

            </div>

            <button
                className="auth-button"
                onClick={
                    isRegistering
                        ? handleRegister
                        : handleLogin
                }
            >
                {isRegistering
                    ? "BEGIN JOURNEY"
                    : "ENTER REALM"}
            </button>

            <div className="auth-switch">

                <span>
                    {isRegistering
                        ? "Already an explorer?"
                        : "New to L3PTARA?"}
                </span>

                <button
                    onClick={() => {
                        setIsRegistering(!isRegistering);
                    }}
                >
                    {isRegistering
                        ? "Login"
                        : "Create Account"}
                </button>

            </div>

        </div>

    </div>
);

}

export default Login;