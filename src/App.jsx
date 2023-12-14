import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Single from "./components/single/Single";
import Home from "./pages/Home/Home";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const user = false;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Single />} />

        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/post/:postId" element={<Single />} /> */}
        {/* <Route path="/write" element={<Write />} /> */}

        {/* Conditionally render Home or Register based on the 'user' variable */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/write" element={user ? <Settings /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
