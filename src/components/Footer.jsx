import React from 'react'
import styles from '../style'
import { facebook, messenger , instagram } from '../assets'

const Footer = () => {
  return (
    <div className={` ${styles.flexCenter} h-[200px] bg-fontBlack`}>
      <div>
        <p className='text-center'>
         <span className='text-white font-bebas text-[30px]'>CONTACT</span> <br />
          <span className='text-white font-teacher text-[18px] leading-none'> #6 Delacruz st. <br/> Bayombong, Nueva Vizcaya</span><br/>
        </p>
        <div className={` ${styles.flexCenter}`}>
          <a href='https://www.facebook.com/andrei.emmanuel.9' target="_blank"><img src={facebook} alt='facebook' className={`${styles.iconContacts}`}></img></a>
          <a href='https://www.facebook.com/andrei.emmanuel.9' target="_blank"><img src={messenger} alt='messenger' className={`${styles.iconContacts}`}></img></a>
          <a href='https://www.instagram.com/andrei_emmanuel/' target="_blank"><img src={instagram} alt='instagram' className={`${styles.iconContacts}`}></img></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
