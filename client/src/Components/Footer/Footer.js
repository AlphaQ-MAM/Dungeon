import React from 'react'
import { Link } from 'react-router-dom';
import dungeon from '../../Images/dungeon.png'
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.img} src={dungeon} alt="Dungeon" />
            <div className={styles.social_links}>
                <Link to="https://www.instagram.com//">
                    {/* <span className="fa-stack fa-lg ig combo"> */}
                    <span className={styles.combo + ' ' + styles.ig + ' fa-stack fa-lg'}>
                        <i className={'fa fa-circle fa-stack-2x ' + styles.circle}></i>
                        <i className={'fa fa-instagram fa-stack-1x fa-inverse ' + styles.icon}></i>
                    </span>
                </Link>
                <Link to="#">
                    <span className={styles.combo + ' ' + styles.fb + ' fa-stack fa-lg'}>
                        <i className={'fa fa-circle fa-stack-2x ' + styles.circle}></i>
                        <i className={'fa fa-facebook fa-stack-1x fa-inverse ' + styles.icon}></i>
                    </span>
                </Link>
                <Link to="#">
                    <span className={styles.combo + ' ' + styles.yt + ' fa-stack fa-lg'}>
                        <i className={'fa fa-circle fa-stack-2x ' + styles.circle}></i>
                        <i className={'fa fa-youtube-play fa-stack-1x fa-inverse ' + styles.icon}></i>
                    </span>
                </Link>
                <Link to="https://twitter.com/developer_sah">
                    <span className={styles.combo + ' ' + styles.tw + ' fa-stack fa-lg'}>
                        <i className={'fa fa-circle fa-stack-2x ' + styles.circle}></i>
                        <i className={'fa fa-twitter fa-stack-1x fa-inverse ' + styles.icon}></i>
                    </span>
                </Link>
            </div>
            <p style={{ color: 'white', marginTop: '2%' }}>Designed By AlphaQMAM</p>
        </div>
    )
}

export default Footer
