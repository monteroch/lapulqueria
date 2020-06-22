import { makeStyles } from '@material-ui/core/styles';

import welcomeBackground from '../../assets/images/pulqueTwoJars.jpg';


export default makeStyles((theme) => ({
    welcomeContainer: {
        backgroundImage: `url(${welcomeBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        width: '100%',

        [theme.breakpoints.down("sm")]:{
            height: '61em',
            backgroundAttachment: 'scroll'
        },

        [theme.breakpoints.down("xs")]:{
            height: '48.5em',
            backgroundAttachment: 'scroll'
        },

    },
    pulqueriaLogo: {
        width: '40em',
        [theme.breakpoints.down("sm")]:{
            width: '30em',
        },
        [theme.breakpoints.down("xs")]:{
            width: '18em',
        }
    }
}));