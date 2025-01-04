import React, { useState } from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  // Local state to handle form input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(); // Call the function to update isLoggedIn in the parent
    } else {
      alert("Please fill in both fields.");
    }
  };

  if (isLoggedIn) {
    return <p>You are already logged in!</p>;
  }

  return (
    <div className="child">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
