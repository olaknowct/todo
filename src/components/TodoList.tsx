'use client';
import React from 'react';
import Add from '@/assets/heroicons/add.svg';
import Trash from '@/assets/heroicons/trash.svg';
import Edit from '@/assets/heroicons/edit.svg';
import Image from 'next/image';

export default function TodoList() {
  const handleDelete = () => {
    console.log('delete');
  };

  const handleEdit = () => {
    console.log('edit');
  };

  return (
    <ul className='w-1/2'>
      <li className='flex justify-between bg-green-100'>
        <span>test</span>
        <div className='flex'>
          <Image
            src={Edit}
            onClick={handleEdit}
            width={20}
            height={20}
            alt='Picture of the author'
          />
          <Image
            src={Trash}
            onClick={handleDelete}
            width={20}
            height={20}
            alt='Picture of the author'
          />
        </div>
      </li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </ul>
  );
}
