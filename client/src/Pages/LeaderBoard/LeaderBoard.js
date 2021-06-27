import React, { useEffect } from 'react'
import './LeaderBoard.css'
import M from 'materialize-css';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Table from '../../Components/LeaderBoard/Table'
import SearchBar from '../../Components/LeaderBoard/SearchBar'
import FireAnimation from '../../Components/FireAnimation/FireAnimation';


const useStyles = makeStyles((theme) => ({
    paper: {
        zIndex: 1,
        position: 'relative',
        backgroundColor: 'black'
    },
}));
function LeaderBoard() {

    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
    });
    useEffect(() => {
        const interval = setTimeout(() => handleSlideUp(), 100);
        return () => {
            clearTimeout(interval);
        };
    }, []);

    const handleSlideUp = () => {
        setChecked((prev) => !prev);
    };
    return (
        <>
            <div id="parallax" className="parallax-container" style={{ paddingTop: '20vh',textAlign:'center'}} >
                <h1 className="white-text text1" style={{ paddingTop: '8%', fontWeight:'bold'}}>THE DUNGEON LEADERBOARD</h1>
                <div className="parallax case" style={{ paddingTop: '10%' }}>
                    <img src="Dun.jfif" alt="source_img" className="responsive-img" style={{backgroundPosition:'cover'}} />
                    <FireAnimation />
                </div>
                <SearchBar />
            </div>
            <div style={{textAlign:'center'}}>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                        <Table />
                        <div className="parallaxInLeader1" style={{ height: '50vh' }}>
                            <Link className="waves-effect waves-light btn-large white black-text" style={{ marginTop: '20px' }}><i class="material-icons right">arrow_forward</i>Next</Link>
                    </div>
                </Paper>
                </Slide>
                <hr />
            </div>
        </>
    )
}

export default LeaderBoard