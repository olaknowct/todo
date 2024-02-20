import LoginForm from '@/components/LoginForm';
import TodoList from '@/components/TodoList';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen justify-center mt-24  '>
      <LoginForm />
    </main>
  );
}
