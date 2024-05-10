import React from "react";
import styles, { interact } from "../style";
import { profile } from "../assets";

const Hero = () => {
  return (
    <div className={`${styles.flexCenterRsp}select-none sm:pt-[20px] md:border-b-4`}>
      <div className={`sm:${styles.flexCenter}`}>
        <div className="md:pr-[75px] mt-[20px]">
          <div className="text-white leading-none md:ml-[30px]">
            <p className="text-center md:text-left text-[50px] md:text-[60px] font-bebas md:ml-[10px] leading-[30px] md:leading-[40px]">
              Hello, I'm
            </p>
            <p className="text-center md:text-left text-[70px] md:text-[150px] font-bebas md:leading-[140px]">
              Andrei Yu
            </p>
            <p className="text-center md:text-left text-[30px] md:text-[40px] font-bebas md:ml-[5px] leading-[10px]">
              and I'm a <span className="text-gainsboro underline">Front-End Developer.</span> 
            </p>
            <p className="hidden md:block text-center md:text-left font-teacher text-[20px] md:ml-[5px] mt-[20px]">
              Specialized in Web Development and Design <br/> 
              focusing on sleek, user-friendly websites.<br/>
              Let's collaborate to bring your digital <br/>
              vision to life.
            </p>
          </div>
          
          <div className={`${styles.flexCenter} hidden sm:flex py-[20px]`}>
            <a href="#about"><button className={`${interact.buttons} font-oswald`}>ABOUT</button></a>
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
            className="w-[100%] max-w-[350px] md:max-w-[500px] lg:max-w-[750px] "
            src={profile}
            alt="profile"
          />
        </div>

        <div
          className={`${styles.flexCenter} sm:hidden flex px-[10px] py-[20px]`}>
          <p
            className={`${styles.flexCenter} text-white text-[17px] leading-none font-teacher text-center`}>
            Specialized in web development and <br />
            design focusing on sleek, user-friendly <br />
            websites. Let's collaborate to bring your <br />
            digital vision to life.
          </p>
        </div>
        {/* <div className={`${styles.flexCenter} sm:hidden flex`}>
          <button className={`${interact.buttons}`}>ABOUT</button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
