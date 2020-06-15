import React from 'react';
import Grid from '@material-ui/core/Grid';

import pulqueJar from '../../assets/images/pulquejar.jpg';
import pulqueTwoJars from '../../assets/images/pulqueTwoJars.jpg';

import useStyles from './home.styles';

export default function Home(){

    const classes = useStyles();

    return(
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item className={classes.intro}> {/* This is for intro section */}
                <img alt='pulque-jar' src={pulqueTwoJars}/>
            </Grid>
        </Grid>
    )

}