'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userData } from '@/data/user';
import { initialFormData } from '@/data/constants';
import { fakeUserDataAtom, userAtom } from '@/lib/jotai/atom';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [isError, setIsError] = useState<string>('');
  const [_, setCurrentUser] = useAtom(userAtom);
  const [fakeUserData, setFakeUserData] = useAtom(fakeUserDataAtom);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const user = fakeUserData.find((user) => user.username === formData.username);
    const isAuthenticated = user && user.password === formData.password;

    if (!isAuthenticated) return setIsError('invalid credentials, please try again');
    setFormData(initialFormData);
    setCurrentUser(user);
    router.push('/todo');
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/4 mx-auto p-4 bg-white shadow-md rounded-md '>
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

      {isError && <span className='bg-red-300 text-black p-2 text-xs my-2 block'>{isError}</span>}

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
