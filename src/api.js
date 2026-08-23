const API_URL = "https://l3ptara-1.onrender.com";

export const registerUser = async (username, email, password) => {

    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
};


export const loginUser = async (email, password) => {

    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("token", data.token);

    return data;
};

export const getProfile = async () => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/api/user/profile`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.message || "Failed to fetch profile"
        );
    }

    return data;
};