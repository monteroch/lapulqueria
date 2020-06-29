import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Styles
import useStyles from './home.styles';

//images
import pulqueriaLogo from '../../assets/images/pulqueria_logo.png';
import pulquehistory1 from '../../assets/images/pulque_history_1.jpg';
import seasonpulque from '../../assets/images/season_pulque.jpg';
import founder from '../../assets/images/founder.jpeg';
import ourpulques from '../../assets/images/ourpulques.jpg';
import events from '../../assets/images/events.jpg';

//Components
import Section from '../section/section.component';
import BlockImage from '../blockImage/blockImage.component';


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
                    <Typography className={classes.greetingsTitle}>Bienvenido!</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.greetingsBody}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Grid>
            </Grid>
            {/* Our History */}
            <BlockImage title="Food From The Ground Up">
                Cells are the building blocks of life. All the meat we eat grows from animal cells, and our approach is no different: We produce food by sourcing high-quality cells from animals. Then we cultivate the cells into meat by feeding them their favorite nutrients. We call this process ‘Essential Nutrition’, because we feed the cells exactly what they need to thrive while eliminating any unnecessary steps along the way.
            </BlockImage>
        </Grid>
    )

}