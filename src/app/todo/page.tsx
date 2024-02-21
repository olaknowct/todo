import AddTodo from "@/components/AddTodo";
import CurrentUser from "@/components/CurrentUser";
import EditTodoModal from "@/components/EditTodoModal";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <CurrentUser />
      <main className='flex h-screen flex-col items-center gap-4 p-8'>
        <AddTodo />
        <TodoList />
        <EditTodoModal />
      </main>
    </>
  );
}
