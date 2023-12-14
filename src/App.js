import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log(`Email: ${email}, Password: ${password}, Mode: ${isLogin ? 'Login' : 'Signup'}`);
  };

  return (

    
    <div >
      
      <NavBar />
      <div className="App">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Login'}
      </p>
      </div>
    </div>
    
  );
};

export default App;

