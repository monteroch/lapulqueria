import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette:{
        primary: {
            main: "#333333"
        },
        common: {
            darkGray: "#333333",
        }
    },
    typography: {
        fontFamily: "Quicksand",
        fontSize: 16
        
    },
    mixins: {
        toolbar: {
            height: 50
        }
    },
    overrides: {
        //This is to remove the opacity from the selected tab
        MuiTab: {
            textColorInherit: {
                '&$selected':{
                    opacity: 0.8
                }
            }
        },
    }
});