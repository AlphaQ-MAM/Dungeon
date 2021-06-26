import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import jett from '../../Images/jett.jpg';
import styles from './Section1.module.css';


const Section1 = () => {
    useEffect(() => {

        var elems = document.querySelectorAll(`.${styles.parall}`);
        M.Parallax.init(elems);

    }, []);
    return (
        <div className={styles.parallaxContainer}>
            {/* <div className={'parallax-container'}> */}
            <div className={styles.parall}>
                {/* <div className={'parallax'}> */}
                <img src={jett} alt="parallax" style={{ transform: 'translate3d(-50%, 0px, 0px)', opacity: '1' }} />

            </div>
            <div className="row container-fluid">
                <div className="col s12 m7 l6 xl5" style={{ paddingLeft: '10%' }}>
                    <h3>A 5v5 character-based tactical shooter <br /></h3>
                    <h2>Dungeons</h2>
                    <button class={styles.butt + ' ' + styles.buttonAnthe}>
                        {/* <button class={'butt buttonAnthe'}> */}

                        <Link to="/download" style={{ color: 'white' }}>
                            <span>Download Now!</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section1;