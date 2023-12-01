import GoogleImg from '../assets/images/google.png'
import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {

  // This is a method provided by Auth0 to trigger the authentication process, such as redirecting the user to the Auth0 login page
  const { loginWithRedirect } = useAuth0();

  return (

    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">

      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-[100vh]">
          <h1 className="font-bold text-xl xl:text-3xl text-[#213b5e]">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          
          {/* Sign in with Google Button */}
          <button onClick={() => loginWithRedirect()} className="flex gap-4 p-4 ring-1 ring-[#213b5e] rounded-md hover:bg-[#c11430]">
            <img
              src={GoogleImg}
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline" to="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>

  );
};

export default Login