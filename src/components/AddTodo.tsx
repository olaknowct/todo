"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
}

export default function AddTodo() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });

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
    console.log("Form submitted:", formData);
    toggleModal();
  };

  return (
    <div>
      <button
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none'
        onClick={toggleModal}
      >
        Add Todo
      </button>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-lg font-semibold mb-4'>Add Todo</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='title' className='block mb-1'>
                  name:
                </label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                  required
                />
              </div>

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
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
