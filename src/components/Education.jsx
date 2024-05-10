import React from "react";
import { smu } from "../assets";
import { school } from "../constants";
import styles from "../style";

const Education = () => {
  return (
    <div className="border-black mt-[5px]">
     <div>
        <div className={`${styles.flexCenter}`}>
          <h1 className="font-bebas text-white text-[40px]">EDUCATION</h1>
        </div>
      <h1 className="absolute text-white font-bebas text-[25px] mx-auto left-0 right-0 text-center md:text-[50px]">SAINT MARY'S UNIVERSITY</h1>
      <img
        src={smu}
        alt="smulogo"
        className="object-cover object-center h-[250px] md:h-[400px] lg:h-[400px] w-full">
      </img>
     </div>

      <div className="grid grid-cols-2 md:grid-cols-3 my-[30px] gap-1">
        {school.map((school, index) => (
          <div key={school.id} className={`${styles.flexCenter} ${school.id % 2 !== 0 ? `md:bg-primary md:text-fontWhite` : `md:bg-fontWhite md:text-fontBlack`} ${school.id % 3 === 0 ? `bg-primary text-fontWhite` : `bg-fontWhite text-fontBlack`} ${school.id % 3 === 0 ? `col-span-2 md:col-span-1` : ``} p-[10px] `}>
            <div>
              <div className={`${styles.educationFont} mb-[10px] md:mb-[30px]`}>{school.school}</div>
              <div className={`${styles.educationFont} mb-[10px] md:mb-[30px]`}>{school.year}</div>
              <div className={`${school.course ? `block` : `hidden`} ${styles.educationFont}`}>
                {school.course}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
