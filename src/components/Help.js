import React from 'react'
import GoogleImg from '../assets/images/KFC_ColonelIcon_RGB_Black.jpg'
import { Link } from 'react-router-dom'

const Help = () => {

  const handleVisitGlobalWebsite = () => {
    window.location.href = 'https://www.global.kfc.com';
  };

  return (
    
    // Following smae design language as the Login page but adapted for the About page
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">

      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-[100vh]">

          {/* Heading */}
          <h1 className="font-bold text-xl xl:text-3xl text-[#213b5e]">HISTORY OF THE BRAND AND COLONEL SANDERS</h1>

          {/* Description */}
          <p>KFC, a subsidiary of Yum! Brands, Inc. (NYSE: YUM.), is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin’ good recipe more than 80 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. Today we still follow his formula for success, with real cooks breading and freshly preparing our delicious chicken by hand in more than 26,000 restaurants in over 150 countries and territories around the world.</p>
          
          {/* VIsit KFC GLobal page */}
          <button className="flex gap-4 p-4 ring-1 ring-[#213b5e] rounded-md hover:bg-[#c11430]" onClick={handleVisitGlobalWebsite}>
            <img
              src={GoogleImg}
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Visit KFC global Website</span>

          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Help