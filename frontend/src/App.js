import { useState } from "react";
import Tasks from "./components/Tasks";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showLogin, setShowLogin] = useState(true);

  if (!token) {
    return (
      <div className="container">
        <h1>Task Manager</h1>
        {showLogin ? (
          <>
            <Login setToken={setToken} />
            <p>
              Don’t have an account?{" "}
              <span className="link" onClick={() => setShowLogin(false)}>
                Register here
              </span>
            </p>
          </>
        ) : (
          <>
            <Register setToken={setToken} />
            <p>
              Already have an account?{" "}
              <span className="link" onClick={() => setShowLogin(true)}>
                Login here
              </span>
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
        }}
      >
        Logout
      </button>
      <Tasks />
    </div>
  );
}
