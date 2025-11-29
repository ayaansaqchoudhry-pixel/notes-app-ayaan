'use client';

import { useState } from 'react';
import Dashboard from './Dashboard';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Change this to whatever password you want
    if (password === 'your-secret-password') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  // If logged in, show Dashboard
  if (loggedIn) {
    return <Dashboard />;
  }

  // Login form
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Login</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleLogin} style={{ padding: '0.5rem' }}>
        Login
      </button>
    </div>
  );
}



