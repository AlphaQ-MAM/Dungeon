import React from 'react'
import { Link } from 'react-router-dom';
import styles from './News.module.css';
function News() {
    return (
        <div className={styles.news}>

            <div className={'row'}>
                <div className="col l1 s12"></div>
                <div className="col s12 m4 l6" style={{ marginBottom: '5%' }}>
                    <h1 style={{ margin: '0px' }} className={styles.h1}>News Updates</h1>

                </div>
            </div>
            <div className={styles.x + ' row'} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <div className={styles.y}>
                    {/* <div className="col s12 l1 m1"></div> */}
                    <div className="col s12 l3 m3">
                        <figure className={styles.figure + ' ' + styles.effectGoliath}>

                            <img className={styles.img} src="news2.jfif" alt="img23" />
                            <h6>New <span>Updates</span></h6>
                            <p>Read the full news in our News Section</p>
                        </figure>

                    </div>
                    <div className={' col s12 l3 m3'}>
                        <figure className={styles.figure + ' ' + styles.effectGoliath}>

                            <img className={styles.img} src="news3.jfif" alt="img23" />
                            <h6>Bugs <span>Fixed</span></h6>
                            <p>Read the full news in our News Section.</p>
                        </figure>
                    </div>
                    <div className={' col s12 l3 m3'}>
                        <figure className={styles.figure + ' ' + styles.effectGoliath}>

                            <img className={styles.img} src="news4.jfif" alt="img23" />
                            {/* <figcaption className={styles.figurecaption}> */}
                            <h6>New<span>Episode</span></h6>
                            <p>Read the full news in our News Section.</p>

                        </figure>
                    </div>
                </div>

                <div className="center container">
                    <button class={styles.butt + ' ' + styles.buttonAnthe}>

                        <Link to="/news" style={{ color: 'white' }}>
                            <span>Read News</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News
