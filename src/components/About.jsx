import React from "react";
import styles, { interact } from "../style";
import { design } from "../assets";

const About = () => {
  return (
    <div className={`${styles.flexCenter} sm:py-[80px]`}>
      <div
        className={`md:${styles.flexCenter} w-[70%] text-white text-left px-[15px] font-mont md:py-[100px]`}>
        <div
          className={`${interact.aboutCard} border-l-4 pl-[20px] md:w-[300px] md:border-t-4 md:pr-[20px] md:p-[30px] md:mr-[50px]`}>
          <span className="font-oswald text-[40px]">About Me</span>
          <br />
          <span>
            I am Andrei Emmanuel Yu, a fourth-year Information Technology
            student at Saint Mary's University, skilled in web development and
            multimedia. I am ready to apply my knowledge and passion for
            technology to real-world challenges in the IT industry.
          </span>
        </div>
        <div
          className={`${interact.aboutCard} pt-[20px] border-l-4 border-b-4 pl-[20px] pb-[20px] md:w-[300px] md:mx-[50px] md:p-[30px]`}>
          <span className="font-oswald text-[40px]">Objective</span> <br />
          <span>
            As a graduating fourth-year student, I am actively seeking job
            opportunities where I can enhance my skills, leverage my knowledge,
            and contribute to a company's success through dedication and
            diligence.
          </span>
        </div>
      </div>

      <div className="md:absolute md:right-0 w-[30%] flex items-center justify-end">
        <img
          src={design}
          alt="design"
          className="h-[880px] xs:h-[550px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-cover object-right"></img>
      </div>
    </div>
  );
};

export default About;
