import React from "react";
import styles from "../style";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section className={`${styles.flexCenter} h-screen w-full sm:pl-[90px]`}>
      <div className={`${styles.flexCenterRsp} h-screen sm:w-1/2 w-full`}>
        <div>
          <p className="text-white leading-none font-main sm:text-[100px] text-[70px] sm:leading-[80px] leading-[60px] pt-[50px] text-center">
            Hello I'm <br />
            <span className="sm:text-[100px] text-[80px]">Andrei Yu</span>
          </p>

          <p className="text-center sm:mx-[5px] sm:pt-[0px] text-white pt-[10px]">
            specialized in web development and design <br/>
            focusing on sleek, user-friendly websites. Let's <br/>
            collaborate to bring your digital <br/>
            vision to life.
          </p>
        </div>
      </div>
      <div
        className={`${styles.flexCenter} h-screen w-1/2 text-[100px] hidden sm:flex`}
      >
        <img src={profile} alt="profile" className="max-w-[500px] min-w-[100px]"></img>
      </div>
    </section>
  );
};

export default Hero;
