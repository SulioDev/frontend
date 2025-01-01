"use client";
import { signIn } from 'next-auth/react';

const FacebookLogin = () => {
  return (
    <div className="flex justify-center">
      <button 
        onClick={() => signIn('facebook')} 
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default FacebookLogin;
