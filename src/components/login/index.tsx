'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/home'); // Navigate to home page
  };

  return (
    <div>
      <button className="p-4 bg-black rounded-md" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
