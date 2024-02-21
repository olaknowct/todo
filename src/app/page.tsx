import CredentialsList from "@/components/CredentialsList";
import LoginForm from "@/components/LoginForm";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col justify-start pt-24 h-screen '>
      <LoginForm />
      <CredentialsList />
    </main>
  );
}
