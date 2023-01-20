import { style } from '@mui/system'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../public/images/site_logo.png'
import menu from '../../public/images/menu.png'
import closeMenu from '../../public/images/cross.png'
import styles from  '../../styles/Navbar.module.css'
const Navbar = () => {

  const [fix, setFix] = useState(false)
  const [menuIcon,setMenuIcon] = useState(false)
  function setFixed(){
    if(window.scrollY >= 102){
      setFix(true)
    }else{
      setFix(false)
    }

  }



  useEffect(function mount() {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", setFixed);

    return function unMount() {
      window.removeEventListener("scroll", setFixed);
    };
  });


  const menuHandler=(e)=>{
    setMenuIcon(!menuIcon)
    
  }
  
  return (
    <div className={styles.rooNav}>
      <div  className={ fix ? [styles.navbarContainer, styles.fixed].join(" "):styles.navbarContainer}>
      <div  className={styles.logo}>
          <Image 
            src={logo}
            alt="No Image"
            width={50}
            height={50}
          />
        <span>
          <p>Health</p>
          <p>Solution</p>
        </span>
        </div>
      <div className={styles.navigation}>
        <div  className={styles.navButton}>
          <ul>
            <li><a href='#'>Specialities</a></li>
            <li><a href='#'>Hospitals</a></li>
            <li><a href='#'>Health advice</a></li>
            <li><a href='#'>Contact us</a></li>
          </ul>
        </div>
        <button >Login</button>
      </div>
      <div className={styles.icon}><Image onClick={menuHandler} src={menuIcon ? menu : closeMenu} alt='No Image' width={40} height={40}/></div>
      </div>
      <div className={menuIcon ? styles.dropdown : styles.showDropDown}>
        <div >
            <ul>
              <a href='#'>Specialities</a>
              <a href='#'>Hospitals</a>
              <a href='#'>Health advice</a>
             <a href='#'>Contact us</a>
            </ul>
        </div>
        <div><button>Login</button></div>
      </div>
    </div>
  )
}

export default Navbar
