import React from "react";
import styles, { interact } from "../style";
import { profile } from "../assets";

const Hero = () => {
  return (
    <div className={`${styles.flexCenterRsp}select-none sm:pt-[20px] md:border-b-4`}>
      <div className={`sm:${styles.flexCenter}`}>
        <div className="md:pr-[75px]">
          <p
            className={`py-[5px] text-white font-bebas text-[60px] leading-[45px] text-center sm:text-[75px] sm:leading-[60px] md:text-[100px] md:leading-[75px] lg:text-[150px] lg:leading-[110px]`}>
            Hello I'm
            <br />
            Andrei Yu
          </p>

          <p
            className={`${styles.flexCenter} font-mont hidden sm:flex text-white text-[15px] lg:text-[20px] leading-none text-center`}>
            Specialized in Web Development and Design <br />
            focusing on sleek, user-friendly websites. Let's <br />
            collaborate to bring your digital <br />
            vision to life.
          </p>

          <div className={`${styles.flexCenter} hidden sm:flex py-[20px]`}>
            <button className={`${interact.buttons} font-oswald`}>ABOUT</button>
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <img
            className="w-[100%] max-w-[350px] md:max-w-[400px] lg:max-w-[500px] px-[20px]"
            src={profile}
            alt="profile"
          />
        </div>

        <div
          className={`${styles.flexCenter} sm:hidden flex px-[10px] py-[20px]`}>
          <p
            className={`${styles.flexCenter} text-white text-[17px] leading-none font-poppins text-center`}>
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
