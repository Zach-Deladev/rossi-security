import React from 'react'
import styles from "./Homestats.module.css";



const HomeStats = () => {
  return (
    <div className={styles.bg}>

      <div className={styles.why}>
        <h1>Why Choose Us?</h1>
      
        <p><span style={{color:"red"}}>80%</span> of our client have been with us for more than
         5 years

        <br></br> <span style={{color:"red"}}>5</span> out of <span style={{color:"red"}}>6</span> emergency bookings are filled in less than 90 minutes

        <br></br> <span style={{color:"red"}}>95%</span> of client emails are responded to within 10 minutes

        <br></br> <span style={{color:"red"}}>94%</span> of our officers are proud to work for us!
        </p>
      </div>
    


    </div>
  )
}

export default HomeStats