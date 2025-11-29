"use client";

import { useState } from "react";

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const PASSWORD = "yourpassword"; // Replace with your actual password

  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      setLoggedIn(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
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
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{ marginTop: "10px", padding: "5px" }}
        />
        <button
          onClick={handleLogin}
          style={{ marginTop: "10px", padding: "5px 10px" }}
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

      <div style={{ marginTop: "20px" }}>
        <input
          type="file"
          multiple
          accept=".pdf,image/*"
          onChange={handleFileChange}
          style={{ marginBottom: "20px" }}
        />
      </div>

      {files.length > 0 && (
        <div>
          <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
            Uploaded Files:
          </h2>

          {files.map((file, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{file.name}</p>

              {/* PDF Preview */}
              {file.type === "application/pdf" && (
                <object
                  data={URL.createObjectURL(file)}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                >
                  <p>
                    PDF preview not supported.{" "}
                    <a href={URL.createObjectURL(file)} download>
                      Download PDF
                    </a>
                  </p>
                </object>
              )}

              {/* Image Preview */}
              {file.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ maxWidth: "100%", marginTop: "10px" }}
                />
              )}

              {/* Other file types */}
              {!file.type.startsWith("image/") &&
                file.type !== "application/pdf" && (
                  <p>Preview not available for this file type.</p>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}








