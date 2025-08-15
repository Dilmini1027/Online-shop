

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup Data:', form);
    navigate('/');
  };

  return (
    <div style={styles.page}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Create an Account</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required style={styles.input} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={styles.input} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required style={styles.input} />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>

        <p style={styles.linkText}>
          Already have an account? <Link to="/login" style={styles.link}>Login here</Link>
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

export default Signup;
