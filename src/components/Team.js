import React from 'react'
import styles from "./Team.module.css"
import ernastes from "../media/ernastes.png"
import hyusein from "../media/hyusein.png"
import nick from "../media/nick.png"

const Team = () => {
  return (

    <div className={styles.team}>
      <h2>Meet the team</h2>
    <div className={styles.cont}>

      <div className={styles.card}>
        <img src={ernastes} alt="Ernastes Alksmantas"></img>
        <h4>Ernastes Alksmantas</h4>
        <p>Managing Director At Rossi Security</p>
      </div>

      <div className={styles.card}>
        <img src={hyusein} alt="Hyusein Yusein"></img>
        <h4>Hyusein Yusein</h4>
        <p>UK Operations Manager At Rossi Security</p>
      </div>

      <div className={styles.card}>
        <img src={nick} alt="Nick Komarov"></img>
        <h4>Nick Komarov</h4>
        <p>London Operations Manager at Rossi Security</p>
      </div>


    </div>

    </div>
  )
}

export default Team
