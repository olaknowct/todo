"use client";
import { userAtom } from "@/lib/jotai/atom";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

function CurrentUser() {
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const router = useRouter();

  const handleLogout = () => {
    setCurrentUser({} as User);
    router.push("/");
  };

  return (
    <nav className='bg-white p-4 max-w-3xl mx-auto mt-5 border border-gray-200 rounded-lg flex justify-between items-center'>
      <div>
        Welcome back, <span className='font-semibold text-green-600'>{currentUser.name}</span>
      </div>
      <button
        className='bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-md focus:outline-none transition duration-150 ease-in-out'
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default CurrentUser;
