import React, { useEffect } from 'react';
import M from 'materialize-css';
import tour from '../../Images/tournaments.jpg';
import styles from './TournamentParallax.module.css';


const TournamentParallax = () => {

    useEffect(() => {

        var elems = document.querySelectorAll(`.${styles.parall}`);
        M.Parallax.init(elems);

    }, []);
    return (
        <div className={styles.parallaxContainer}>
            {/* <div className={'parallax-container'}> */}
            <div className={styles.parall}>
                {/* <div className={'parallax'}> */}
                <img src={tour} alt="parallax" style={{ transform: 'translate3d(-50%, 0px, 0px)', opacity: '1' }} />

            </div>
            <div className="row container-fluid">
                <div className="col s12 m7 l6 xl5">
                    {/* <h3>A 5v5 character-based tactical shooter <br /></h3> */}
                    <h2>Dungeon<br />Tournaments</h2>

                </div>
            </div>
        </div>
    )
}

export default TournamentParallax
