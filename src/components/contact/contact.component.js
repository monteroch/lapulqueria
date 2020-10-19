import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Images
import map from '../../assets/images/map.png';

//Styles
import useStyles from './contact.styles';

export default function Contact(){

    const classes = useStyles();

    return(
        <Grid container direction='row' className={classes.contactContaine}>
            <Grid item container direction="column" className={classes.getInTouch}>
                <Grid item container className={classes.gitTitleContainer}><Typography className={classes.gitTitle}>GET IN TOUCH</Typography></Grid>
                <Grid item container className={classes.gitContent}>
                    <Grid item>
                       <Typography>Element 1</Typography> 
                    </Grid>
                    <Grid item>
                        <Typography>Element 2</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Element 3</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container className={classes.contactForm}><Typography>Message Us</Typography></Grid>
            <Grid item container className={classes.map}>
                <img src={map} alt="map" className={classes.mapImage}/>
            </Grid>
        </Grid>
    )

}