import React, { useRef } from 'react'
import styles from '../style'
import {useIsVisible} from "../function"

const SkillsModal = () => {
    const ref1 = useRef()
    const isVisible1 = useIsVisible(ref1)

  return (
    <div className='h-full'>
      <div className={`${styles.flexCenter} h-full`}>
        <div ref={ref1} className={`transition-opacity ease-in duration-[3000ms] ${isVisible1 ? "opacity-100" : "opacity-0"} ${styles.modalSkillsContainer}`}>
            asd
        </div>
      </div>
    </div>
  )
}

export default SkillsModal
