import { useState } from "react";
import "../styles/login.css";
import { registerUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      await registerUser({
        name,
        email,
        password,
      });

      alert(
        "Registration Successful"
      );

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <form
        onSubmit={handleSubmit}
      >
        <h1>
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="submit"
        >
          Register
        </button>
        <div className="auth-link">
  Already have an account?

  <Link to="/login">
    Login
  </Link>
</div>
      </form>
    </div>
  );
};

export default Register;