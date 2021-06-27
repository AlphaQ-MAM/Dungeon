import React from 'react'
import game from '../../Images/gold.svg'
import solo from '../../Images/gift.svg'
import royal from '../../Images/silver.svg'
import styles from './TourPrize.module.css';

const TourPrize = () => {
    return (
        <div>
            <h3 className={styles.h3} >Tournament Prizes</h3>
            <div className={styles.r + ' row center'}>
                {/* <div className="col m1 l1"></div> */}
                <div className="col s12 m3 l3">
                    <img src={game} alt="gamer" style={{ width: '50%', height: 'auto' }} />
                    <br />
                    <h4 className={styles.h4}>1st Position</h4>
                    <br />
                    <p className={styles.p}>The hardwork and concentration one may overcome any challenges faced by one. The FIRST
                        position is of utmost importance and achieving such heights calls for rewards worth Rs 2000/-
                    </p>
                </div>
                <div className="col m1 l1"></div>

                <div className="col s12 m3 l3">
                    <img src={royal} alt="gamer" style={{ width: '50%', height: 'auto' }} />
                    <br />
                    <h4 className={styles.h4}>2nd Position</h4>
                    <br />
                    <p className={styles.p}>The hardwork and concentration one may overcome any challenges faced by one. The SECOND
                        position is of utmost importance and achieving such heights calls for rewards worth Rs 1500/-</p>
                </div>
                <div className="col m1 l1"></div>

                <div className="col s12 m3 l3">
                    <img src={solo} alt="gamer" style={{ width: '50%', height: 'auto' }} />
                    <br />
                    <h4 className={styles.h4}>Honourable <br /> Mention</h4>
                    <br />
                    <p className={styles.p}>The hardwork and concentration one may overcome any challenges faced by one. The HONOURABLE
                        position is of utmost importance and achieving such heights calls for rewards worth Rs 1000/-</p>
                </div>
            </div>
        </div>
    )
}

export default TourPrize
