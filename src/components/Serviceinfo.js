import React from 'react'
import styles from "../components/Serviceinfo.module.css"
import retail from "../media/retail.jpg"
import corporate from "../media/corp.jpg"
import rolls from "../media/rolls.jpg"
import hotel from "../media/hotell.jpg"
import catwalk from "../media/catwalk.jpeg"
import training from "../media/training2.jpg"



const Serviceinfo = () => {
  return (
    <div className={styles.cont}>
        <h1>We offer a wide range of services to cater to your security needs</h1>
        <div className={styles.griditems}> 
            <img alt="retail" src={retail}></img>
            <div className={styles.text}>
                <h4>Retail Security</h4>
                
                <p>Luxury Retail Security needs a unique approach. At Rossi Security, we complete your team by providing immaculate Security Officers that reflect your brand image, supported by specialist operations management. <br></br><br></br>As the first person to be seen at your door, Security personnel must be courteous, professional and discreet. Ultimately providing you the assurance that your clients, employees, business and profit are protected.
                    That’s why we go to the highest level for recruiting, training, operational management and service delivery.
                    After a full assessment, we develop a comprehensive Security Plan which includes bespoke information relevant to your specific site.
                    Our Security Management Team works with you to achieve outstanding results we understand Luxury Retail better than any other provider. </p>
                
            </div>
        
        </div>

        <div className={styles.griditems}> 
            <img alt="hotel" src={hotel}></img>
            <div className={styles.text}>
                <h4>Hotel Security</h4>
                    
                <p>We understand the importance of having your hotel secure at all times.
                        Specialising in the seamless implementation of security cover, we have an exceptional Operations Management structure in place behind the scenes.
                        This enables us to provide round-the-clock cover, ensuring trained Officers are available when needed. All with a flexible service to suit your needs. <br></br><br></br>
                        We deliver reliable security solutions based on our extensive knowledge of Luxury Security and Event Security.
                        
                        </p>
                  
            </div>  
        </div>

        <div className={styles.griditems}> 
            <img alt="close protection" src={rolls}></img>
            <div className={styles.text}>
                <h4>Close protection & VIP</h4>
                    
                <p>CEOs, Diplomats, Ultra High Net Worth Individuals and their families as well as celebrities are often more susceptible to threats. We provide Close Protection and VIP Security Solutions to ensure individuals are kept as safe and protected as possible.
Either deployed as an individual or team, our Operatives have extensive experience providing executive protection. We handle any environment in London, across the UK and globally.
With discretion being paramount our specialist attributes include confidentiality, and any situation is managed with fine-tuned social skills. We are highly trained in all aspects of executive protection, and always ready to facilitate the needs of our client.
Our Close Protection Operatives stay on top of constantly changing threats and risks by assessing global and local situations. Skills are maintained through continual professional development.        </p>
                 
            </div>  
        </div>
        <div className={styles.griditems}> 
            <img alt="coprporate" src={corporate}></img>
            <div className={styles.text}>
                <h4>Corporate Security</h4>
                    
                <p>Operating across London and Oxfordshire, we offer high quality Corporate and Office Security services. With your individual requirements in mind, we carefully design a bespoke solution covering your needs – whether that’s professional security guarding, concierge/reception duties or Technical Security Solutions.
We select and train our Security Operatives to ensure they blend seamlessly with your corporate image. Our professionals are Close Protection and CCTV licensed, trained in Emergency First Aid and Fire Warden.

We build a team based on your needs. This significantly reduces the risks and vulnerabilities of your organisation.

Our experienced Operation Management team will address and resolve any issues promptly and professionally. They provide the ultimate support to our Operatives on your premises.</p>
                 
            </div>  
        </div>
        <div className={styles.griditems}> 
            <img alt="events" src={catwalk}></img>
            <div className={styles.text}>
                <h4>Events Security</h4>
                    
                <p>We have the experience and expertise to cover a wide range of events including Fashion Shows, Launches, Exhibits, Store Openings and Sample Sales –
our fully bespoke security solutions are meticulously designed and implemented.
Working hand-in-hand with event organisers, we execute a full Risk Assessment at the planning stage. <br></br> You can be assured all essential areas, guests and VIPs are protected, and any emergency procedures clearly communicated in advance.
We provide fully trained, impeccably presented Security Officers alongside the following range of services to ensure your event runs without a hitch.</p>
                
            </div>  
        </div>
        <div className={styles.griditems}> 
            <img alt="training" src={training}></img>
            <div className={styles.text}>
                <h4>Conflict management training</h4>
                    
                <p>Tailored for staff at all levels, our Conflict Management Training teaches proactive techniques to handle conflict in the workplace.
Covering psychological factors and potential triggers, attendees will learn how to communicate effectively and mitigate risks.
This is the foundation for teaching your staff to pre-empt adverse behaviour, handle complex situations and resolve conflict when it occurs. <br></br><br></br>
Training is carried out on your premises, or at our Training Facilities, in short sessions by our specialist trainer. We provide all equipment and deliver the training before opening hours or whenever is convenient.
Our Conflict Management Training includes scenario based training with simulations of common day-to-day occurrences.
We can design the course to meet your bespoke requirements and needs. The training requires staff to actively participate.</p>
                 
            </div>  
        </div>

    </div>
  )
}

export default Serviceinfo
