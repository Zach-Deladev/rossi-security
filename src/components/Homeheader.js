import React from 'react';
import styles from "./Homeheader.module.css";
import logoMain from "../media/logomain.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";



const Homeheader = () => {
  return (
    <>
    <div className={styles.bg}>
     <div className={styles.lgdiv}>
       <img alt="Logo" src={logoMain}></img>
       <div className={styles.links}>
       <a href='https://uk.linkedin.com/company/rossi-security' target="_blank"  rel="noreferrer"><FontAwesomeIcon className={styles.linked} icon={faLinkedin} ></FontAwesomeIcon></a>
       <a href='https://www.instagram.com/rossisecurity/' target="_blank"  rel="noreferrer"><FontAwesomeIcon className={styles.linked} icon={faInstagram} ></FontAwesomeIcon></a>
       <a href='https://twitter.com/RossiSecurity' target="_blank"  rel="noreferrer"><FontAwesomeIcon className={styles.linked} icon={faTwitter} ></FontAwesomeIcon></a>
     </div>
    </div>
  
   
    
   
    </div>
    </>)
}

export default Homeheader
