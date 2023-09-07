import React from 'react'
import Styles from '../styles/Hero.module.css'
import MyOpenPeep from '../assets/OpenPeeps.png'

export default function Hero(){
    return (
        <div className={Styles.hero}>
            <div className={Styles.imageContainer}>
                <img src={MyOpenPeep}/>
            </div>
            <div className={Styles.headingContainer}>
                <h1 className={Styles.heading}>
                    Hey there, I'm Matthew,
                    a self-taught developer 
                    based in Manila.
                </h1>
            </div>
            <div className={Styles.buttonContainer}>
                <a className={Styles.button} href="">Want to discuss?</a>
                <a className={Styles.button}href="">Let's Talk</a>
            </div>
        </div>
    )
}