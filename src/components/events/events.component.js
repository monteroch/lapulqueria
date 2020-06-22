import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Images
import doge from '../../assets/images/doge.png';

//Styles
import useStyles from './events.styles';

export default function Events(){

    const classes = useStyles();

    return(
        <Grid container direction='column' alignItems="center">
            <img src={doge} alt="muscle-doge" className={classes.underConstruction}/>
           <Typography className={classes.underConstructionText}>The event's page is under construction</Typography>
        </Grid>
    )

}