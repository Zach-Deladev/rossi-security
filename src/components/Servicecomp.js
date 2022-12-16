import React from 'react'
import styles from "./Servicecomp.module.css"
import retail from "../media/luxury-retail.jpg";
import closep from "../media/close-protection.jpg";
import hotel from "../media/luxury-hotel.jpg";
import corporate from "../media/corporate.jpg";
import event from "../media/events.jpg";
import training from "../media/training.jpg";

const Servicecomp = () => {
  return (
<>
<div className={styles.cont}>
<div className={styles.title}><h2>Services</h2></div>
    <div className={styles.grid}>

  <div><img alt="Luxury Retail Security" src={retail}></img></div>
  <div><img alt="Luxury Hotel Security" src={hotel}></img></div>
  <div><img alt="Luxury Event Security" src={event}></img></div>
  <div><img alt="Close Protection" src={closep}></img></div>
  <div><img alt="Corporate Security" src={corporate}></img></div>
  <div><img alt="Training" src={training}></img></div>
 
  


  </div>
  </div>
  </>
  )
}

export default Servicecomp
