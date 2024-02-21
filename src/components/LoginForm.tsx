"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface FormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
    router.push("/todo");
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-sm mx-auto p-4 bg-white shadow-md rounded-md '>
      <h2 className='text-lg font-semibold mb-4'>Login</h2>
      <label htmlFor='username' className='block mb-2'>
        Username:
      </label>
      <input
        type='text'
        id='username'
        name='username'
        value={formData.username}
        onChange={handleChange}
        required
        className='w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500'
      />

      <label htmlFor='password' className='block mb-2'>
        Password:
      </label>
      <input
        type='password'
        id='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        required
        className='w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500'
      />

      <button
        type='submit'
        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
