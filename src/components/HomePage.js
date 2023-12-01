import React from 'react'
import Food from '../assets/images/Global Interior.JPG'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Text Container */}
        <div className="flex items-center  flex-col gap-6 font-semibold lg:px-10 text-black mt-20" >
          <h1 className="text-4xl sm:text-3xl text-center uppercase p-4 md:p-10 md:text-4xl xl:text-6xl">
            Order Finger Lickin’ meals here and get delivery in 30 minutes
          </h1>

          {/* Button */}
          <Link
            to="/menu" className="py-4 px-8 rounded" style={{ background: "#c11430", color: "white", marginBottom: '40px' }}>
            GO TO MENU
          </Link>
        </div>

        {/* Image COntainer */}
        <div className=" w-full h-full relative items-center mt-5">
          <img src={Food} alt="" fill className="object-cover h-full md:h-[80vh] mx-auto" />
        </div>
      </div>

      <Footer />
    </>
  );
};


export default HomePage