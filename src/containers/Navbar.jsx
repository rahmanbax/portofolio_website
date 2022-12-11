import React from "react";

const Navbar = () => {
  return (
    <div className="py-6 bg-white w-full">
      <ul className="flex gap-[120px] font-medium place-content-center">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portofolio</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
