import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center gap-8 p-24'>
      <AddTodo />
      <TodoList />
    </main>
  );
}
