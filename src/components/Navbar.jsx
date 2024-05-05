import React from "react";
import styles from "../style";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className={`${styles.flexCenter}`}>
      <div className={`${styles.navBar} ${styles.flexCenter}`}>
        <ul className="list-none hidden sm:block">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className="py-5 px-2">
              <img
                src={nav.icon}
                alt={nav.title}
                className="h-[30x] w-[30px]"
              />
            </li>
          ))}
        </ul>

        <ul className="flex sm:hidden text-[50px] text-white">*</ul>
      </div>

      
    </nav>
  );
};

export default Navbar;
