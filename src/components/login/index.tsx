'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/home'); // Navigate to home page
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <form
          onSubmit={handleClick}
          className=" flex flex-col rounded-md gap-6 px-8 py-12 bg-[#022541]"
        >
          <input
            className="p-4 bg-gray-100 rounded-md"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-4 bg-gray-100 rounded-md"
            type="password"
            placeholder="Password"
          />
          <button type="submit" className="p-4 bg-black rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
