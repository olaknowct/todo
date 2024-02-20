'use client';
import React, { useState } from 'react';

interface FormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        id='username'
        name='username'
        value={formData.username}
        onChange={handleChange}
        required
      />

      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        id='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
