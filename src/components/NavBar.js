import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import React, { useState, useRef, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import companyLogo from "../media/logo.png";


import Home from "../pages/Home"
import About from "../pages/About";
import Services from "../pages/Services.js";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import styles from "../components/Navbar.module.css"
import ScrollToTop from "./ScrollToTop";
function NavBar() {

// This function makes the navbar transition from transparent to black on scroll
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 30
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, []);




   

  return (
  
  <BrowserRouter>
    <ScrollToTop />
    <Navbar className={styles.navbg} collapseOnSelect expand="lg" fixed="top" variant="dark" style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : 'transparent'}}>

      <Navbar.Brand className={styles.brand} as={Link} to="/" ><img src={companyLogo} alt="Logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse className={styles.items} id='responsive-navbar-nav'>
         <Nav  className="justify-content-end" style={{ width: "100%" }} >
              <Nav.Link className={styles.pagename} as={Link} eventKey="0" to="/" href="#home">Home</Nav.Link>
              <Nav.Link  className={styles.pagename}as={Link} eventKey="1" to="/about" >About</Nav.Link>
              <Nav.Link className={styles.pagename} as={Link} eventKey="2" to="/services">Services</Nav.Link>
              <Nav.Link className={styles.pagename} as={Link} eventKey="3" to="/careers">Careers</Nav.Link>
              <Nav.Link className={styles.pagename2} as={Link} eventKey="4" to="/contact">Contact Us</Nav.Link>
              
          </Nav>
      </Navbar.Collapse>

  </Navbar>
  
  <Routes>
  
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
    </Routes>
  </BrowserRouter>
  
  );
}

export default NavBar;
