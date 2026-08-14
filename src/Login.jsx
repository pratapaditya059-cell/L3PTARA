import { useState } from "react";
import { loginUser, getProfile } from "./api";

function Login({ onLogin }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    return (

        <div>

            <h2>Login</h2>

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

            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );
}

export default Login;