import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    headerContainer: {
        backgroundColor: theme.palette.common.darkGray,
        height: '45px',
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
        textTransform: "none"
    }
}));