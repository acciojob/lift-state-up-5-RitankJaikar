import React, { useState } from "react";
import LoginForm from "./LoginForm";

function App() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="parent">
      <h1>{isLoggedIn ? "Welcome, User!" : "Please Log In"}</h1>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
}

export default App;
