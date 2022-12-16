import React from 'react'
import cctv from "../media/cctv.jpg"
import manne from "../media/manne.jpg"
import styles from "./Aboutus.module.css"

const Aboutus = () => {
  return (
    <div className={styles.cont}>
        <div className={styles.first}>
        <img src={cctv} alt="cameraimage"></img>
        <h4>About Us</h4>
        <p>For us at Rossi Security, understanding how your business works and what you need is crucial. It`s how we`ve provided outstanding security solutions for our clients for over a decade.

Based on a solid operational structure, deep industry knowledge and expert recruitment process, our unique approach makes us one of the most renowned and trusted providers in this field. We seamlessly become part of your service team, rather than bolted-on as many security companies traditionally operate.</p>

      </div>

      <div className={styles.second}>
      <img src={manne} alt="silohuette"></img>
      <p>For us at Rossi Security, understanding how your business works and what you need is crucial. It`s how we`ve provided outstanding security solutions for our clients for over a decade.

Based on a solid operational structure, deep industry knowledge and expert recruitment process, our unique approach makes us one of the most renowned and trusted providers in this field. We seamlessly become part of your service team, rather than bolted-on as many security companies traditionally operate.</p>

      </div>
    </div>
  )
}

export default Aboutus
