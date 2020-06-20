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
        width: '100%'
    }
}));