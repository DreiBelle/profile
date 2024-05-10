import React, { useRef } from 'react'
import styles from '../style'
import {useIsVisible} from "../function"
import { skills } from '../constants'
import {profile} from '../assets'

const SkillsModal = () => {
    const modalSkill = useRef()
    const modalSkillV = useIsVisible(modalSkill)

  return (
    <div className='h-full'>
      <div className={`${styles.flexCenter} h-full`}>
        <div ref={modalSkill} className={`transition-opacity ease-in duration-[1000ms] ${modalSkillV ? "opacity-100" : "opacity-0"} ${styles.modalSkillsContainer} `}>
          <div>
            <div>
              <div className={`avatar ${styles.flexCenter} pt-[30px] pb-[10px]`}>
                <div className="w-[100px] rounded-full">
                  <img src={profile}/>
                </div> <br/>
              </div>
              <div className={`avatar ${styles.flexCenter} font-bebas text-[40px]`}>
                <p>ANDREI</p>
              </div>
              <div>
                {skills.map((skill, index) => (
                   <div key={skill.id} className={`${styles.flexCenter}`}>
                    <div className='px-[5px]'>
                      <img src={skill.icon} alt="icon" className={`h-[20px]`} />
                    </div>
                    <div className='leading-[15px] pt-[10px] pr-[20px] text-[18px] font-bebas'>
                        {skill.title} <br/>
                        <progress className="progress progress-primary bg-smoke w-56" value={skill.rating} max="100"></progress>
                    </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsModal
