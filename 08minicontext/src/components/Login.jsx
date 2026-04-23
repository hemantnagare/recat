import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext); // ✅ correct

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default Login;