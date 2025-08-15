import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add real authentication logic here

    // Redirect to homepage or dashboard after login
    navigate('/home');
  };

  return (
    <div style={styles.page}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Welcome to BuzzCart</h1>
        <p>Your stylish shop awaits!</p>

        <form style={styles.form} onSubmit={handleLogin}>
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <button type="submit" style={styles.button}>Login</button>
        </form>

        <p style={styles.linkText}>
          Don't have an account? <Link to="/signup" style={styles.link}>Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundImage: `url("/freepik__a-minimalist-background-for-buzzcart-online-shop-s__92391.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    padding: '2rem',
    borderRadius: '10px',
    textAlign: 'center',
    width: '350px',
    color: '#fff',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  linkText: {
    marginTop: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'underline',
  },
};

export default Login;
