import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './home.styles';

import pulqueriaLogo from '../../assets/images/pulqueria_logo.png';


export default function Home(){

    const classes = useStyles();

    return(
        <Grid container direction='column'>
            {/* Welcome Section */}
            <Grid container item className={classes.welcomeContainer} justify="center" alignItems="center">
                <Grid item>
                    <img src={pulqueriaLogo} alt="pulqueria-logo" className={classes.pulqueriaLogo}/>
                </Grid>
            </Grid>
            {/* Next Section */}
            <Grid container item>
                <Typography>Hola Mundo</Typography>
            </Grid>
        </Grid>
    )

}