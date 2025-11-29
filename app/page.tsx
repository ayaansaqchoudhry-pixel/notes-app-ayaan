"use client";

import { useState } from "react";

export default function Page() {
  const [passwordInput, setPasswordInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const PASSWORD = "your-secret-password"; // replace with your password

  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      setLoggedIn(true);
    } else {
      alert("Incorrect password!");
    }
  };

  if (!loggedIn) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <h1>Enter Password to Access Notes</h1>
        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{ padding: "10px", margin: "10px", fontSize: "16px" }}
        />
        <button
          onClick={handleLogin}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>

      {/* File upload section */}
      <div style={{ marginTop: "20px" }}>
        <p>Upload files here (PDFs, images, etc.)</p>
        <input type="file" multiple />
      </div>

      {/* Notes list */}
      <div style={{ marginTop: "20px" }}>
        <h2>Uploaded Notes:</h2>
        <ul>
          <li>SampleNote.pdf</li>
        </ul>
      </div>
    </div>
  );
}






