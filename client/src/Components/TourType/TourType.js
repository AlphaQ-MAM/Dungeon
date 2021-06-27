import React from 'react'
import game from '../../Images/gaming1.svg'
import game1 from '../../Images/gaming2.svg'
import solo from '../../Images/solo.svg'
import royal from '../../Images/royal.svg'
import styles from './TourType.module.css';

const TourType = () => {
    return (
        <div>
            <h3 className={styles.h3} >Tournament Types</h3>
            <div className={styles.r + ' row center'}>
                <div className="col s6 m3 l3">
                    <img src={game} alt="gamer" style={{ width: '50%', height: 'auto' }} />
                    <br />
                    <h4 className={styles.h4}>Death-Match</h4>
                    <br />
                    <p className={styles.p}>Deathmatch is a type of game mode where the objective is tied in some way to killing enemies.
                        These modes can either be free-for-all or team based.
                        Players have an infinite amount of lives and upon being killed will respawn at a random location after a short delay.</p>
                </div>
                <div className="col s6 m3 l3">
                    <img src={royal} alt="gamer" style={{ width: '50%', height: 'auto' }} />
                    <br />
                    <h4 className={styles.h4}>Battle Royal</h4>
                    <br />
                    <p className={styles.p}>Battle Royal is a higher stakes version where you play competitively against other players to earn and compete for a rank.

                        Should a game reach a 12-12 scoreline, the games instead goes into Overtime where the first team to get a 2-round lead on their opponent wins the game.

                        This mode lasts for 30-40 minutes.</p>
                </div>
                <div className="col s6 m3 l3">
                    <img src={solo} alt="gamer" style={{ width: '50%', height: 'auto' }} />
                    <br />
                    <h4 className={styles.h4}>Spike Rush</h4>
                    <br />
                    <p className={styles.p}>Spike Rush is a Bo7 5v5 mode where all players start each round with the same random weapon. Random orbs spawn around the map that players can collect to grant buff for themselves and/or their teammates or afflict enemies with debuffs.

                        This mode lasts for 8-12 minutes.</p>
                </div>
                <div className="col s6 m3 l3">
                    <img src={game1} alt="gamer" style={{ width: '50%', height: 'auto' }} />
                    <br />
                    <h4 className={styles.h4}>Replication</h4><br />
                    <p className={styles.p}>Replication is 5v5 Bo9 mode where all players on a team play as the same agent. Players vote for an agent they want to play and the game then randomly selects one of the choices.

                        Replication has an estimated game time of 10-15 minutes</p>
                </div>
            </div>
        </div>
    )
}

export default TourType
