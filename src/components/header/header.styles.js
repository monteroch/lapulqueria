import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    headerContainer: {
        backgroundColor: theme.palette.common.darkGray,
        height: "50px",
        width: '100%',
        justifyContent: 'center'
    },
    gridContainer: {
        justifyContent: 'center'
    },
    logoContainer: {
        width: "100px"
    },
    logo: {
        height: '25px'
    },
    labelText: {
        textTransform: "none",
    },
    appBarMargin: {
        ...theme.mixins.toolbar,
    },
    companyName: {
        fontFamily: 'Lobster'
    },
    drawer: {
        width: "15em",
        backgroundColor: theme.palette.common.darkGray,
        color: '#ffffff'
    },
    icon: {
        color: '#ffffff'
    }
}));