import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser({
      email,
      password,
    });

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    navigate("/");
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
};

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>

        <div className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;