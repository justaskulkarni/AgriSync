import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    let navigate = useNavigate();
    const onChange = (event) => {
		setCredentials({ ...credentials, [event.target.name]: event.target.value });
	};
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:6100/api/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: credentials.email, password: credentials.password }),
		});

		const json = await response.json();

		if (json.success) {
			localStorage.setItem("Token", json.authToken);
			navigate("/user/dashboard");
		}

		if (json.error) {
			setError(json.error);
			setCredentials({
				email: "",
				password: "",
			});
			setTimeout(() => {
				setError(null);
			}, 4000);
		}
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <label htmlFor="Email">Email</label>
                <input type="email" value={credentials.email} name="email" onChange={onChange} placeholder="" />

                <label htmlFor="Password">Password</label>
                <input type="password" value={credentials.password} name="password" onChange={onChange} placeholder="" />

                <button>Login</button>
                {error && <div>{error}</div>}
            </form>
        </>
    )
}

export default Login