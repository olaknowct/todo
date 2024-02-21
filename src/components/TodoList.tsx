'use client';
import React, { useEffect } from 'react';
import Trash from '@/assets/heroicons/trash.svg';
import Edit from '@/assets/heroicons/edit.svg';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { editModalAtom, editTodoAtom, fakeUserDataAtom, userAtom } from '@/lib/jotai/atom';
import { useRouter } from 'next/navigation';

export default function TodoList() {
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const [_showEditModal, setShowEditModal] = useAtom(editModalAtom);
  const [_, setEditTodo] = useAtom(editTodoAtom);
  const router = useRouter();
  const isAuthenticated = currentUser && currentUser.name;
  const [fakeUserData, setFakeUserData] = useAtom(fakeUserDataAtom);
  const handleDelete = (AddToDo: any) => {
    const newTodos = currentUser.todos.filter((todo) => todo !== AddToDo);
    const newUserDetail = { ...currentUser, todos: newTodos };

    const newFakeUserData = [
      ...fakeUserData.filter((fakeUser) => fakeUser.username !== currentUser.username),
      newUserDetail,
    ];
    setFakeUserData(newFakeUserData);
    setCurrentUser(newUserDetail);
  };

  const handleEdit = (editTodo: any) => {
    setEditTodo(editTodo);
    setShowEditModal(true);
  };

  useEffect(() => {
    if (!isAuthenticated) router.push('/');
  }, [currentUser, router]);

  return (
    <>
      <ul className='w-1/4'>
        {currentUser?.todos?.map((todo, i) => (
          <li
            key={i}
            className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 mb-2 rounded-md shadow-md'
          >
            <span className='text-lg'>{todo}</span>
            <div className='flex space-x-2'>
              <button className='focus:outline-none'>
                <Image
                  src={Edit}
                  onClick={() => handleEdit(todo)}
                  width={20}
                  height={20}
                  alt='Edit'
                />
              </button>
              <button className='focus:outline-none'>
                <Image
                  src={Trash}
                  onClick={() => handleDelete(todo)}
                  width={20}
                  height={20}
                  alt='Delete'
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
