import React, { useState } from "react";
import styles from "../style";
import { experience } from "../constants";
import { SkillsModal }  from "../components"

const Skills = () => {
  return ( 
    <div>
      <div className={`${styles.flexCenter} pt-[40px]`}>
        <h1 className="font-bebas text-white text-[40px]">EXPERIENCE</h1>
      </div>
      <div className={`md:${styles.flexCenter}`}>
        <div className={`${styles.flexCenter}`}>
          <div className={`sm:block hidden`}>
            {experience.map((exp, index) => (
              <div key={exp.id} className={`${styles.flexCenter} grid grid-cols-8 gap-2 p-[10px]`}>
                <div className={`${exp.id % 2 !== 0 ? `${styles.cardExp1}` : `${exp.id % 4 === 0 ? `${styles.borderDesign4}` : `${styles.borderDesign2}`}`}`}>
                  <div className={`${exp.id % 2 !== 0 ? `` : `hidden` }`}>
                    <p className={`${styles.cardTitle}`}>
                      <span>{exp.title}</span> <br/>
                      <span>{exp.company}</span> <br/>
                    </p>
                    <ul className={`${styles.cardTask}`}>
                      <li>{exp.task1}</li>
                      <li>{exp.task2}</li>
                      <li>{exp.task3}</li>
                    </ul>
                  </div>
                </div>
                <div className={`${exp.id % 2 === 0 ? `${styles.cardExp2}` : `${exp.id % 3 === 0 ? `${styles.borderDesign3}` : `${styles.borderDesign1}`}`}`}>
                  <div className={`${exp.id % 2 === 0 ? `` : `hidden` }`}>
                      <p className={`${styles.cardTitle}`}>
                        <span>{exp.title}</span> <br/>
                        <span>{exp.company}</span> <br/>
                      </p>
                      <ul className={`${styles.cardTask}`}>
                        <li>{exp.task1}</li>
                        <li>{exp.task2}</li>
                        <li>{exp.task3}</li>
                      </ul>
                    </div>
                </div>
              </div>
            ))}
            <div className={`${styles.flexCenter} md:hidden flex border rounded-xl bg-fontWhite text-fontBlack py-[5px]`}>
                  <button className="font-oswald text-[20px]">Check out my Skills</button>
                </div>
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div>
            <div className={`sm:hidden block p-[10px]`}>
              {experience.map((exp, index) =>(
                <div key={exp.id} className={`${exp.id % 2 !== 0 ? `${styles.cardExp1}` : `${styles.cardExp2}`} ${exp.id === 1 ? `mt-0` : `mt-[10px]`}`}>
                  <p className={`${styles.cardTitle}`}>
                    <span>{exp.title}</span> <br/>
                    <span>{exp.company}</span> <br/>
                  </p>
                    <ul className={`${styles.cardTask}`}>
                      <li>{exp.task1}</li>
                      <li>{exp.task2}</li>
                      <li>{exp.task3}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.flexCenter} md:block hidden`}>
            <SkillsModal />
        </div>
      </div>
    </div>
  );
};

export default Skills;
