import React from 'react'
import styles from "./Footer.module.css"
import ContactForm from './Contactform'

const Footer = () => {

  
  return (
    <div className={styles.bg}>
      <footer className={styles.footer}>
      
    
      <div className={styles.contactform}>

        <div className={styles.contacttitle}>
          <h3>Want to know more?</h3>
          <h4>Contact Us...</h4>
        </div>
        <ContactForm/>
     
      </div>


      <div className={styles.footertext}>

        <div className={styles.text}>
        <h4>Phone:</h4><p> +44 (0) 208 847 9357</p>
        <h4>Opening Hours:</h4><p>
          Monday-Friday:
          9am-6pm
        </p>
        <h4>Address:</h4><p>Rossi Security
          16 Berkeley Street
          Mayfair
          London
          W1J 8DZ
        </p>
      </div>
        <p class={styles.google}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.251642033321!2d-0.14550328422998948!3d51.50859917963537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aacfe637a3b%3A0x66e9847c2d2e9914!2sRossi%20Security!5e0!3m2!1sen!2suk!4v1670339813281!5m2!1sen!2suk" title='map'   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
      </div>
  
  
  </footer>
    </div>
  )
}

export default Footer
