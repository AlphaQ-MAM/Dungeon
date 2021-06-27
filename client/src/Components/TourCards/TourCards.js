import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,

} from '@material-ui/core';
import TourType from '../TourType/TourType';
import TourPrize from '../TourPrize/TourPrize';
import jett from '../../Images/jett.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        backgroundColor: '#161d22'
    },
    root1: {
        maxWidth: 345,
        marginTop: 30,
        backgroundColor: '#222d35',
        color: 'white'
    },
    media: {
        height: 140,
    },

}));

const TourCards = (props) => {
    const classes = useStyles();
    const completed = props.type === 'Completed' ? true : false;
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-start"

            >

                <Grid item xs={12} sm={6} md={3} >
                    <Card className={classes.root1}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="news1.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ice-Breaker
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Tournament 1s are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ width: '100%', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="white" component="p">
                                Time:1pm 11th June
                            </Typography>
                            <Button disabled={completed} size="small" color="primary" variant="contained">
                                Join
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Card className={classes.root1}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="news2.jfif"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Champions Tour
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Find community-run Dungeons esports tournaments happening in 200 communities worldwide.
                                    Click ‘Join’ to enter the Dungeons tournament.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ width: '100%', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="white" component="p">
                                Time:1pm 12th June
                            </Typography>
                            <Button disabled={completed} size="small" color="primary" variant="contained">
                                Join
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Card className={classes.root1}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="news3.jfif"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Challengers Tour
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Find community-run Dungeons esports tournaments happening in 200 communities worldwide. Click ‘Join’ to enter the Dungeons tournament.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ width: '100%', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="white" component="p">
                                Time:1pm 13th June
                            </Typography>
                            <Button disabled={completed} size="small" color="primary" variant="contained">
                                Join
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-start"

            >

                <Grid item xs={12} sm={6} md={3} >
                    <Card className={classes.root1}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="news4.jfif"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dandy Cup
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Find community-run Dungeons esports tournaments happening in 200 communities worldwide. Click ‘Join’ to enter the Dungeons tournament.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ width: '100%', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="white" component="p">
                                Time:1pm 14th June
                            </Typography>
                            <Button disabled={completed} size="small" color="primary" variant="contained">
                                Join
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Card className={classes.root1}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={jett}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Fall Brawl
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Find community-run Dungeons esports tournaments happening in 200 communities worldwide. Click ‘Join’ to enter the Dungeons tournament.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ width: '100%', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="white" component="p">
                                Time:1pm 15th June
                            </Typography>
                            <Button disabled={completed} size="small" color="primary" variant="contained">
                                Join
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Card className={classes.root1}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="dungeonmerch.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Gauntlet
                                </Typography>
                                <Typography variant="body2" color="white" component="p">
                                    Find community-run Dungeons esports tournaments happening in 200 communities worldwide. Click ‘Join’ to enter the Dungeons tournament.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{ width: '100%', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="white" component="p">
                                Time:1pm 16th June
                            </Typography>
                            <Button disabled={completed} size="small" color="primary" variant="contained">
                                Join
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>
            <TourType />
            <TourPrize />

        </div>
    )
}

export default TourCards
