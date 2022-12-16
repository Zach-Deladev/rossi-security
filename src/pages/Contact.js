import React from 'react'
import ContactForm from '../components/Contactform'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.bg}>
    <h1> Like what you see?<br></br><span>Contact us</span> to find out more</h1>
      <ContactForm/>
    </div>
  )
}

export default Contact
