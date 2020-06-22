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
            {/* Greetings Section */}
            <Grid container item className={classes.greetings} direction="column" alignItems="center">
                <Grid item>
                    <Typography className={classes.greetingsTitle}>Bienvenido</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.greetingsBody}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Grid>
            </Grid>
            {/* Our History */}
            <Grid container item className={classes.history} direction='row' justify="space-around">
                <Grid item className={classes.historyImage} xl={6} md={12} xs={12}>                    
                </Grid>
                <Grid item container xl={6} md={12} xs={12} className={classes.historyContent} justify="center" alignItems="center">
                    <Typography className={classes.historyTitle}>Nuestra Historia</Typography>
                    <Typography className={classes.historyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )

}