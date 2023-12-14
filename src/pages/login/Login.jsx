import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <span className="loginTItle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="email" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="password" />
        <button className="loginBtn">Login</button>
      </form>
      <button className="registerBtn">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
};
export default Login;
