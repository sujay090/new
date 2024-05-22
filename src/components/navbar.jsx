import React from "react";

const Navbar = () => {
  return (
    <div className="h-24 w-full bg-[#F4F4F4] flex gap-8 items-center px-10 border-t-2 border-[#28272C] shadow-md">
      <h2 className="font-bold text-3xl">LOGO</h2>
      <div className="flex gap-8 pl-28 font-bold text-xl">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
      </div>
    </div>
  );
};

export default Navbar;
