"use client";
import { initialAddFormData } from "@/data/constants";
import { userData } from "@/data/user";
import { editModalAtom, editTodoAtom, userAtom } from "@/lib/jotai/atom";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

function EditTodoModal() {
  const [showEditModal, setShowEditModal] = useAtom(editModalAtom);
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const [editTodo] = useAtom(editTodoAtom);
  const [editFormData, setEditFormData] = useState<EditFormData>({ name: editTodo });

  const router = useRouter();
  const toggleModal = () => setShowEditModal(!showEditModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = userData.find((user) => user.username === currentUser.username);
    if (!user) return router.push("/");
    const newTodos = currentUser.todos.map((todo) =>
      todo === editTodo ? editFormData.name : todo
    );
    setCurrentUser({ ...currentUser, todos: newTodos });
    setEditFormData(initialAddFormData);
    toggleModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  if (!showEditModal) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg'>
        <h2 className='text-lg font-semibold mb-4 text-center'>Edit Todo</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 flex items-center gap-4'>
            <label htmlFor='name' className='block mb-1'>
              Todo:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={editFormData.name || editTodo}
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
  );
}

export default EditTodoModal;
