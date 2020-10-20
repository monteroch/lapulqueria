import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import SmsIcon from '@material-ui/icons/Sms';

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
                    <Grid item xs={12} sm={4} className={classes.getInTouchItemContainer}>
                       <LocationOnIcon className={classes.itemIcon}/>
                       <Typography>ADDRESS</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.getInTouchItemContainer}>
                        <CallIcon className={classes.itemIcon}/>
                        <Typography>PHONE</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.getInTouchItemContainer}>
                        <SmsIcon className={classes.itemIcon}/>
                        <Typography>EMAIL</Typography>
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