import React from 'react'

import styles from "./Testimonials.module.css"
import fendi from "../clients/fendi.jpg"
import alfies from "../clients/Alfies-Grey.jpg"



const Testimonials = () => {
  return (
    <div className={styles.cont}>
      <h1>Testimonials</h1>
        <div className={styles.first}>
        <img src={fendi} alt="cameraimage"></img>
       
        <p>“We have worked with Rossi Security for a number of years, and we believe the company is well recognised within the security industry and a valued partner.”
<br></br>
<b>- Paul Lorraine, UK General Manager, Longchamp</b></p>
      </div>

      <div className={styles.second}>
      <img className={styles.logo2} src={alfies} alt="silohuette"></img>
      <p>“I highly recommend Rossi Security, they have always provided us with a high level of professionalism and customer care. Nothing is too much trouble for them and we have always received a friendly helpful service. Thank you.”
<br></br>
<b>- Vicki Davis, Manager, Alfies Antique Market, London</b></p>
<img className={styles.logo} src={alfies} alt="silohuette"></img>
      </div>
    </div>
  )
}

export default Testimonials
