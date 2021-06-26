import React from 'react'
import NewsComponentRight from './NewsComponentRight';
import NewsComponentLeft from './NewsComponentLeft.js';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from '../../Pages/News/News.module.css'


const useStyles = makeStyles((theme) => ({
    paper: {
        zIndex: 1,
        position: 'relative',
        backgroundColor: 'black'
    },
}));

function NewsContainer(props) {

    const classes = useStyles();

    return (
        <>
            <Slide direction="up" in={props.checked} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                    <div style={{paddingTop:'50px',textAlign:'center'}}>
                        <h2 className="white-text center" style={{margin:'0',marginBottom:'30px' }}>LATEST NEWS!</h2>
                        <div className="newo" style={{}} >
                            <section className="container section  " style={{ paddingBottom: '4vw' }} id="photos">
                                <NewsComponentLeft img="news2.jfif" title="MAP" alt="MAP">
                                    <p className="white-text">Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming </p>
                                </NewsComponentLeft>
                                <NewsComponentRight img="news1.jpg" title="AGENT" alt="AGENT">
                                    <p className="white-text">To hit our goal of creating a more dynamic sandbox, we have adjusted ability pricing, cooldown rates, and ultimate costs on every Agent. Generally, we noticed that certain agents were able to have too much impact with their abilities without making any significant tradeoffs. Our goal here is to create a healthier pace of abilities throughout a round and force you to think more critically about your purchase decisions.</p>
                                </NewsComponentRight>
                                <NewsComponentLeft img="news3.jfif" title="WHAT'S NEW" alt="WHAT'S NEW">
                                    <p className="white-text">Now with more ways to make the boldest plays. Updates to the Rank Rating system, placements up to Diamond 1 for those that excel, and another season of fresh competition. See yourself on top of the leaderboards.
                                    </p>
                                </NewsComponentLeft>
                                <NewsComponentRight img="news4.jfif" title="ACCOUNT LEVELING" alt="ACCOUNT LEVELING">
                                    <p className="white-text">Episode 3 will add a new way to recognize and reward you for your time playing in all VALORANT game modes. Your account Player Card will display a numeric level based on how much you play, that goes up the more time you put in.</p>
                                </NewsComponentRight>
                                <Link className={'waves-effect waves-light btn ' + styles.buttonColor} style={{ marginTop: '5%' }}> Load More<i class="material-icons">arrow_forward</i></Link>
                            </section>
                        </div>
                    </div>
                </Paper>
            </Slide>

        </>
    )
}

export default NewsContainer
