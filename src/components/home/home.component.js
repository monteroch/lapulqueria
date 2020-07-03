import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Styles
import useStyles from './home.styles';

//images
import pulqueriaLogo from '../../assets/images/pulqueria_logo.png';
import pulquedonkey from '../../assets/images/pulquedonkey.png';
import ourpulques from '../../assets/images/ourpulques.jpg';
import craftbeer from '../../assets/images/craftbeer.jpg'
// import seasonpulque from '../../assets/images/season_pulque.jpg';
// import founder from '../../assets/images/founder.jpeg';
// import events from '../../assets/images/events.jpg';

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
            <BlockImage title="Our Story" image={pulquedonkey} imgPosition="end">
                Cells are the building blocks of life. All the meat we eat grows from animal cells, and our approach is no different: We produce food by sourcing high-quality cells from animals. Then we cultivate the cells into meat by feeding them their favorite nutrients. We call this process ‘Essential Nutrition’, because we feed the cells exactly what they need to thrive while eliminating any unnecessary steps along the way.
            </BlockImage>
            <BlockImage title="Our Pulques" image={ourpulques} imgPosition="start">
                Cells are the building blocks of life. All the meat we eat grows from animal cells, and our approach is no different: We produce food by sourcing high-quality cells from animals. Then we cultivate the cells into meat by feeding them their favorite nutrients. We call this process ‘Essential Nutrition’, because we feed the cells exactly what they need to thrive while eliminating any unnecessary steps along the way.
            </BlockImage>
            <BlockImage title="Something For Everyone" image={craftbeer} imgPosition="end">
                After moving the business online, Casa Giorgio began providing some local options such as sandwiches, fries and chicken nuggets. Our aim is to be all-inclusive, and offer something for all taste-buds. So, if you are not a huge lover of pizza, you can still grab a bite to eat from Casa Giorgio.
            </BlockImage>
        </Grid>
    )

}