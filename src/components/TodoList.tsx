"use client";
import React from "react";
import Add from "@/assets/heroicons/add.svg";
import Trash from "@/assets/heroicons/trash.svg";
import Edit from "@/assets/heroicons/edit.svg";
import Image from "next/image";

export default function TodoList() {
  const handleDelete = () => {
    console.log("delete");
  };

  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <>
      <ul className='w-1/4'>
        <li className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 mb-2 rounded-md shadow-md'>
          <span className='text-lg'>test</span>
          <div className='flex space-x-2'>
            <button className='focus:outline-none'>
              <Image src={Edit} onClick={handleEdit} width={20} height={20} alt='Edit' />
            </button>
            <button className='focus:outline-none'>
              <Image src={Trash} onClick={handleDelete} width={20} height={20} alt='Delete' />
            </button>
          </div>
        </li>
        <li className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 mb-2 rounded-md shadow-md'>
          <span className='text-lg'>test</span>
          <div className='flex space-x-2'>
            <button className='focus:outline-none'>
              <Image src={Edit} onClick={handleEdit} width={20} height={20} alt='Edit' />
            </button>
            <button className='focus:outline-none'>
              <Image src={Trash} onClick={handleDelete} width={20} height={20} alt='Delete' />
            </button>
          </div>
        </li>
        <li className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 mb-2 rounded-md shadow-md'>
          <span className='text-lg'>test</span>
          <div className='flex space-x-2'>
            <button className='focus:outline-none'>
              <Image src={Edit} onClick={handleEdit} width={20} height={20} alt='Edit' />
            </button>
            <button className='focus:outline-none'>
              <Image src={Trash} onClick={handleDelete} width={20} height={20} alt='Delete' />
            </button>
          </div>
        </li>
        <li className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 mb-2 rounded-md shadow-md'>
          <span className='text-lg'>test</span>
          <div className='flex space-x-2'>
            <button className='focus:outline-none'>
              <Image src={Edit} onClick={handleEdit} width={20} height={20} alt='Edit' />
            </button>
            <button className='focus:outline-none'>
              <Image src={Trash} onClick={handleDelete} width={20} height={20} alt='Delete' />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
