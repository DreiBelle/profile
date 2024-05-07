import React from "react";
import styles, { interact } from "../style";
import { design } from "../assets";

const About = () => {
  return (
    <div className={`${styles.flexCenter} sm:pt-[20px]`}>
      <div className={`md:${styles.flexCenter} w-[70%] text-white text-left px-[15px] md:pl-[100px] font-mont`}>
        <div className={`${interact.aboutCard} border-l-4 pl-[20px] md:w-[300px] md:border-t-4 md:pr-[20px]`}>
          <span className="font-oswald text-[40px]">About Me</span>
          <br />
          <span>
            I'm Andrei Emmanuel Yu and I am in my fourth year studying
            Information Technology at Saint Mary's University. I love working
            with technology, and I've learned a lot about managing databases and
            building websites. I'm excited to use these skills in the real world
            and make a positive impact in the IT industry. As I get closer to
            graduating, I'm eager to apply what I've learned and bring my
            enthusiasm for technology to practical situations.
          </span>
        </div>
        <div className={`${interact.aboutCard} pt-[20px] border-l-4 border-b-4 pl-[20px] pb-[20px] md:w-[300px] md:ml-[50px]`}>
          <span className="font-oswald text-[40px]">Objective</span> <br />
          <span>
            As a graduating fourth-year student, I'm actively pursuing job
            opportunities where I can improve my skills, apply my learnings, and
            contribute to a company's success through dedication and hard work.
          </span>
        </div>
      </div>

      <div className="w-[30%] flex items-center justify-end">
        <img
          src={design}
          alt="design"
          className="h-[880px] xs:h-[550px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-cover object-right"></img>
      </div>
    </div>
  );
};

export default About;
