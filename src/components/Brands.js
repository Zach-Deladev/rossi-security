import React from 'react'
import {useState} from 'react';
import styles from "./Brands.module.css"
import gucci from "../clients/gucci.jpg"
import fendi from "../clients/fendi.jpg"
import amq from "../clients/amq.jpg"
import zegna from "../clients/zegna.jpg"
import givenchy from "../clients/givenchy.jpg"
import alfies from "../clients/Alfies-Grey.jpg"
import arije from "../clients/Arije-Grey.jpg"
import bottega from "../clients/Bottega-Grey.jpg"
import breitling from "../clients/breitling-m.png"
import brunello from "../clients/Brunello.jpg"
import louboutin from "../clients/C-Louboutin-Grey.jpg"
import churchs from "../clients/Churchs-Grey.jpg"
import dolce from "../clients/Dolce-Grey.jpg"
import eden from "../clients/Eden-Gallery-grey.jpg"
import grays from "../clients/Grays-Antiques-Grey.jpg"
import boss from "../clients/H-Boss-Grey.jpg"
import kenzo from "../clients/Kenzo-Grey.jpg"
import lacoste from "../clients/Lacoste-Grey.jpg"
import loewe from "../clients/LOEWE.jpg"
import longchamp from "../clients/Longchamp-Grey.jpg"
import missoni from "../clients/Missoni-Grey.jpg"
import moschino from "../clients/Moschino-Grey.jpg"
import mulberry from "../clients/Mulberry-Grey.jpg"
import prada from "../clients/Prada.jpg"
import rimowa from "../clients/RIMOWA.jpg"
import ferragamo from "../clients/Salvatore-Ferragamo.jpg"
import stella from "../clients/Stella-McC-Grey.jpg"
import tg from "../clients/tg-mislius.png"
import time from "../clients/Time-and-Gems-Grey.jpg"
import ford from "../clients/Tom-Ford-grey.jpg"
import valentino from "../clients/Valentino-Grey.jpg"






const Brands = () => {


 
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
   
    setIsShown(current => !current);
  };


  

  return (
 <>
 
 <div className={styles.brandcont}>
  <h2>We supply officers to some of the UK's leading brands...</h2>
 <div className={styles.cont}>
    <div className={styles.gucci}> <img alt="gucci logo" src={gucci}/></div>
    <div className={styles.fendi}> <img alt="fendi logo" src={fendi}/></div>
    <div className={styles.amq}> <img alt="alexander mcqueen logo" src={amq}/></div>
    <div className={styles.zegna}> <img alt="Zegna logo" src={zegna}/></div>
    <div className={styles.givenchy}> <img alt="Givenchy logo" src={givenchy}/></div>

    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm}  > <img alt="Givenchy logo" src={alfies}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={arije}/></div>
   
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={bottega}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={breitling}/></div>

    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={brunello}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={louboutin}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={churchs}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={dolce}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={eden}/></div>

    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={grays}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={boss}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={kenzo}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={lacoste}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={loewe}/></div>

    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={longchamp}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={missoni}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={moschino}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={mulberry}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={prada}/></div>

    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={rimowa}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={ferragamo}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={stella}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={tg}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={time}/></div>

    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={ford}/></div>
    <div className={styles.hidden} style={{display: isShown ? "inline-block" : 'none'}} id={styles.griditm} > <img alt="Givenchy logo" src={valentino}/></div>
  
 </div>

 <button onClick={handleClick}  className={styles.portbutton}>Full Portfolio</button>
 </div>

 </>
  )
}

export default Brands
