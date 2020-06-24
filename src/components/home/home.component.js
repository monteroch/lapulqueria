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
            <Section title="Nuestra Historia" image={pulquehistory1} backgroundColor="#264653" imgPosition="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
            {/* Our Pulques */}
            <Section title="Nuestros Pulques" image={ourpulques} backgroundColor="#2a9d8f" imgPosition="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
            {/* Our Founder */}
            <Section title="Nuestro Fundador" image={founder} backgroundColor="#e9c46a" imgPosition="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
            {/* The season */}
            <Section title="Pulques de temporada" image={seasonpulque} backgroundColor="#f4a261" imgPosition="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
            {/* Events */}
            <Section title="Eventos" image={events} backgroundColor="#e76f51" imgPosition="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
            
        </Grid>
    )

}