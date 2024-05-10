import React from "react";
import styles from "../style";
import { app1, app2 } from "../assets";

const Sample = () => {
  return (
    <div className={`h-fit mt-[50px] md:${styles.flexCenter} bg-fontBlack md:pl-[50px]`}>
      <div>
        <div>
            <p className={`${styles.flexCenter} md:hidden text-center text-fontWhite py-[30px] font-bebas leading-none text-[30px]`}>
                TRABAWHO: CONNECT JOB <br />
                SEEKERS AND EMPLOYERS
            </p>
        </div>
        <div className={`${styles.flexCenter}`}>
            <img
            src={app2}
            alt="app2"
            className={`${styles.appImage} px-[5px]`}
            ></img>
            <img
            src={app1}
            alt="app1"
            className={`${styles.appImage} px-[5px]`}
            ></img>
        </div>
      </div>
      <div className={`${styles.flexCenter} text-white md:w-1/2`}>
        <div>
            <p className={`${styles.flexCenter} md:flex hidden text-center font-bebas leading-none text-[50px] mt-[15px]`}>
            TRABAWHO: CONNECT JOB <br />
            SEEKERS AND EMPLOYERS
            </p>
            <div className={`${styles.flexCenter}`}>
                <p className={`${styles.flexCenter} text-justify font-teacher text-[17px] px-[20px] py-[10px] max-w-[450px]`}>
                We developed an application using the
                Ionic Vue framework to connect job
                seekers and employers with just a
                swipe. Our team successfully created a
                versatile application accessible on both 
                websites and phones. It features filters 
                and profiles to effectively match the
                right employer with the right employee, 
                and vice versa.
                </p>
            </div>
            <div className={`${styles.flexCenter} py-[20px]`}>
               <a href="https://github.com/DreiBelle/TRABAWHO.git" target="_blank"><button className="btn btn-secondary min-h-[0px] h-[40px] w-[200px] font-bebas text-[30px]">CHECK IT OUT</button></a>
            </div> 
         </div>
      </div>
    </div>
  );
};

export default Sample;
