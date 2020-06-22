import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    underConstruction: {
        width:"50em",
        
        [theme.breakpoints.down("sm")]:{
            width:"35em"
        },
        [theme.breakpoints.down("xs")]:{
            width:"22em"
        }
    },
    underConstructionText: {
        fontSize: "3em",
        textAlign: 'center',

        [theme.breakpoints.down("sm")]:{
            fontSize: "2em"
        },
    }
}));