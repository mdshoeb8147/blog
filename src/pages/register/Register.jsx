import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <span className="registerTItle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="username" />
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="email" />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="password"
        />
        <button className="registerButton">Register</button>
      </form>
      /
      <button className="loginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      ;
    </div>
  );
};
export default Register;
