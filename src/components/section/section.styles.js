import { makeStyles } from '@material-ui/core/styles';

import pulquehistory1 from '../../assets/images/pulque_history_1.jpg';

export default makeStyles((theme) => ({
    section:{
        minHeight: "50em"
    },
    sectionImage: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "50em",

        [theme.breakpoints.down("sm")]:{
            height: "30em"
        }

    },
    sectionContent: {
        padding: "5em",
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: "30em",

        [theme.breakpoints.down("sm")]:{
            padding: "2.5em",
        }
    },
    sectionTitle:{
        color: '#ffffff',
        fontSize: "2.75em",

        [theme.breakpoints.down("sm")]:{
            fontSize: "2.25em",
        }
    },
    sectionText:{
        color: '#ffffff',
        marginTop: "1em",
        fontSize: "1.75em",
        textAlign: 'justify',

        [theme.breakpoints.down("sm")]:{
            fontSize: "1.30em",
        }
    },
}));