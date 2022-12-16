import React from 'react'
import styles from "../components/jobs.module.css"
import fendi from "../clients/fendi.jpg"
import amq from "../clients/amq.jpg"
import gucci from "../clients/gucci.jpg"

const Jobs = () => {
  return (
    <div className={styles.cont}>
        <h1>Current Vacancies</h1>
      <div className={styles.griditems}> 
        <img alt="fendi" src={fendi}></img>
        <div className={styles.text}>
        <h4>Security Supervisor</h4>
        <h6>Salary range: £32,000 - £38,000 </h6>
        <p>We are seeking an experienced Security Supervisor, to assist the Director and Assistant Director of Security & Operational Risk in managing, training and evaluating the daily security operations ensuring a strong focus on the safety and security of our customers. <br></br><br></br><small>Apply via linkedin now!</small></p>
        <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/company/rossi-security/mycompany/" className={styles.jobbtn}>Apply</a>
        </div>
        
      </div>

      <div className={styles.griditems}> 
      <img alt="Alexander McQueen" src={amq}></img>
      <div className={styles.text}>
        <h4>Night time security officer</h4>
        <h6>Salary range: £25,000 - £29,000 </h6>
        <p>We are now looking for someone to join one of our prestigious sites as a security Concierge, providing excellent customer service to our residents.<br></br><br></br><small>Apply via linkedin now!</small></p>
        <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/company/rossi-security/mycompany/" className={styles.jobbtn}>Apply</a>
        </div>
      </div>

      <div className={styles.griditems}> 
      <img alt="gucci" src={gucci}></img>
      <div className={styles.text}>
        <h4>Security manager: Full time</h4>
        <h6>Salary range: £45,000 - £50,000 </h6>
        <p>We are looking for an experienced, highly motivated Security Manager to assist in the management for all aspects of the client’s security requirements and take responsibility for ensuring the smooth day-to-day running of the client’s security function in a multi-tenanted building. It is an exciting time to join our award-winning Company as we continue to grow and secure a number of high-profile corporate security contracts within the Central London region <br></br><br></br><small>Apply via linkedin now!</small></p>
        <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/company/rossi-security/mycompany/" className={styles.jobbtn}>Apply</a>
        </div>
      </div>

    </div>
  )
}

export default Jobs
