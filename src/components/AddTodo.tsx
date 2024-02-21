'use client';
import { initialAddFormData } from '@/data/constants';
import { userData } from '@/data/user';
import { fakeUserDataAtom, userAtom } from '@/lib/jotai/atom';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Add from '@/assets/heroicons/add.svg';
import Image from 'next/image';

export default function AddTodo() {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const [fakeUserData, setFakeUserData] = useAtom(fakeUserDataAtom);
  const [formData, setFormData] = useState<AddTodoFormData>(initialAddFormData);
  const router = useRouter();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = fakeUserData.find((user) => user.username === currentUser.username);
    if (!user) return router.push('/');
    const newUserDetail = { ...currentUser, todos: [formData.name, ...currentUser.todos] };
    const newFakeUserData = [
      ...fakeUserData.filter((fakeUser) => fakeUser.username !== currentUser.username),
      newUserDetail,
    ];

    setFakeUserData(newFakeUserData);
    setCurrentUser(newUserDetail);
    setFormData(initialAddFormData);
    toggleModal();
  };

  return (
    <>
      <button
        className='bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md focus:outline-none flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105'
        onClick={toggleModal}
      >
        <Image src={Add} width={20} height={20} alt='Add' />
        <span className='font-semibold'>Add To Do</span>
      </button>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-lg font-semibold mb-4 text-center'>Add Todo</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4 flex items-center gap-4'>
                <label htmlFor='name' className='block mb-1'>
                  Todo:
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500'
                  required
                />
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none'
                >
                  Add
                </button>
                <button
                  type='button'
                  className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md focus:outline-none ml-2'
                  onClick={toggleModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
