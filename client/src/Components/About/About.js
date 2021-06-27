import React from 'react'
import styles from './About.module.css';
function About() {
    return (
        <div className={styles.About + ' row'} style={{ marginBottom: '0' }}>

            <div className="col l1 s12"></div>
            <div className="col s12 m4 l6">
                <h1 style={{ margin: '0px' }} className={styles.h1}>About Us</h1>
                <p className={styles.p}>
                    Blend your style and experience on a global, competitive stage.
                    You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
                    And, with one life per-round, you'll need to think faster than your opponent if you want to survive.
                    Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                </p>
                <hr className={styles.hr} />
            </div>
            <div className={styles.x + " col s12 m5 l5"}>
                <img className={styles.img} src="dungeonmerch.jpg" alt="Jett OP" />
            </div>
        </div>
    )
}

export default About
