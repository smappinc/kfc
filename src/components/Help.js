import React from 'react'
import GoogleImg from '../assets/images/google.png'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">

      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-[100vh]">
          <h1 className="font-bold text-xl xl:text-3xl text-[#213b5e]">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-[#213b5e] rounded-md hover:bg-[#c11430]">
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
  )
}

export default Help