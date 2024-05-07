import React, { useState } from "react";
import styles from "../style";
import { interact } from "../style";
import { menu, close } from "../assets";
import { Icons } from "../components";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.flexCenter} z-10`}>
      <div className={`${styles.navBar} ${styles.flexCenter}`}>
        <Icons />
      </div>

      <div
        className={`${
          toggle ? "opacity-100" : "opacity-80"
        } md:hidden select-none flex bg-white rounded-full fixed left-3 top-5 drop-shadow-lg w-[40px] h-[40px] object-fit ${
          styles.flexCenter
        }`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-white fixed w-[45px] top-0 mt-[50px] rounded-xl ${
            styles.flexCenter
          }
        `}>
          <Icons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
