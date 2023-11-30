import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" w-full h-10 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between font-semibold mt-auto border-t" style={{ background: "black", color: "white" }}>
      <Link to="/">KFC RESTAURANT</Link>
      <p>© 2023 DM. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
