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
            <Grid item container className={classes.getInTouch}><Typography>Get in Touch</Typography></Grid>
            <Grid item container className={classes.contactForm}><Typography>Message Us</Typography></Grid>
            <Grid item container className={classes.map}>
                <img src={map} alt="map" className={classes.mapImage}/>
            </Grid>
        </Grid>
    )

}