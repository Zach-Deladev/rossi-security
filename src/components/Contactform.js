import React, { useState } from "react";
import styles from "./Contactform.module.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/7ba03330-7585-11ed-a126-b172cf164538"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (


    
     <div className={styles.formcont}>
        <form className={styles.form} action={FORM_ENDPOINT}  onSubmit={handleSubmit} method="post" target="_blank">
            <div>
                <input className={styles.name} type="text" placeholder="Your name" name="name" required />
            </div> 
            <div>
                <input className={styles.email} type="email" placeholder="Email" name="email" required />
            </div>
            <div>
                <textarea className={styles.message} placeholder="Your message" name="message" required />
            </div>
            <div className={styles.button}>
                <button className={styles.btn} type="submit"> Submit</button>
            </div>
        </form>
     </div>

  );
};

export default ContactForm;