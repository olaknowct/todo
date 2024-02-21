"use client";
import { userData } from "@/data/user";
import Avatar, { genConfig } from "react-nice-avatar";
function CredentialsList() {
  return (
    <div className='bg-gray-100 rounded-lg p-4 mt-12 w-1/4 mx-auto'>
      <h2 className='text-lg font-semibold mb-4'>CREDENTIALS FOR EASE TESTING</h2>
      <ul className='divide-y divide-gray-200'>
        {userData.map((user, index) => (
          <li key={index} className='py-2'>
            <div className='flex items-center space-x-4'>
              <div className='flex-shrink-0'>
                <Avatar style={{ width: "7rem", height: "7rem" }} {...genConfig(user.name)} />
              </div>
              <div>
                <p className='text-sm font-medium text-gray-800 mb-2'>{user.name}</p>
                <p className='text-sm font-medium text-gray-800'>username: {user.username}</p>
                <p className='text-xs text-gray-500'>password: {user.password}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CredentialsList;
