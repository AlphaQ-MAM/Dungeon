import React, { useEffect } from 'react';
import NewsContainer from '../../Components/NewsConatiner/NewsContainer';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import M from 'materialize-css';
import { makeStyles } from '@material-ui/core/styles';
import styles from './News.module.css'

const useStyles = makeStyles((theme) => ({
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
        backgroundColor: 'black'
    },
}));

export const News = () => {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const [checkParallax, setcheckParallax] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        if (checked === true) {
            var elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        }
    }, [checked]);

    useEffect(() => {
        const interval = setTimeout(() => handleParallaxText(), 500);
        return () => {
            clearTimeout(interval);
        };
    }, []);

    const handleParallaxText = () => {
        setcheckParallax((prev) => !prev);
    };

    useEffect(() => {
        const interval = setTimeout(() => handleSlideUp(), 0);
        return () => {
            clearTimeout(interval);
        };
    }, []);

    const handleSlideUp = () => {
        setChecked((prev) => !prev);
    };


    return (
           <>
            <section>
                <div >
                    <div id="parallax" className="parallax-container" >
                        <div className="parallax">
                            <img src="dungeon.png" alt="source_img" className="responsive-img" />
                            <div className={classes.container}>
                                <Fade in={checkParallax}>
                                    <Paper elevation={4} className={classes.paper}>
                                        <h1 className={styles.text + ' white-text'} style={{ fontWeight: 'bold' }}>THE DUNGEON NEWS</h1>
                                    </Paper>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <NewsContainer checked={checked} />

                </div>
                <div>
                </div>
            </section>
            <hr/>
            </>
            )
}

export default News
