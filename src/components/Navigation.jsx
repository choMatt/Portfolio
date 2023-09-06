import React from 'react'
import { useState } from 'react'
import styles from '../styles/Navigation.module.css'

export default function Navigation(){
    const [isNavOpened, setIsNavOpened] = useState(false)


    function toggle() {
        setIsNavOpened((prevValue) => !prevValue)
    }
    return (
        <div className={styles.nav}>
            <div onClick={toggle} className={`${styles.backDrop} ${isNavOpened ? styles.backDropOpened : styles.backDropClosed}`}></div>

            <h1 className={styles.logo}>CHO.</h1>

            <label htmlFor="burger" className={styles.burger}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </label>

            <input onClick={toggle} id="burger" className={styles.toggle} type="checkbox" />
            <ul className={`${styles.list} ${isNavOpened ? styles.listOpened : styles.listClosed}`}>
                <label htmlFor="burger" className={styles.burger}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </label>
                <li className={styles.item}>About</li>
                <li className={styles.item}>Tech Stack</li>
                <li className={styles.item}>Projects</li>
                <li className={styles.item}>Contact</li>
            </ul>
        </div>
    ) 
}