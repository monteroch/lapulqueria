import { makeStyles, usetTheme } from '@material-ui/core/styles';

import history from '../../assets/images/history_1.jpg';

export default makeStyles(theme => ({
  imgContainer: {
    marginTop: "5em",
    backgroundImage: `url(${history})`,
    backgroundPosition: '90% 50%',
    backgroundSize: '65% 90%',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    
    [theme.breakpoints.down("lg")]:{
      backgroundPosition: '90% 50%',
      backgroundSize: '70% 80%',
      height: '55em',
    },
    [theme.breakpoints.down("md")]:{
      backgroundPosition: '90% 50%',
      backgroundSize: '70% 75%',
      height: '50em',
    },
    [theme.breakpoints.down("sm")]:{
      backgroundPosition: '80% 50%',
      backgroundSize: '85% 75%',
      height: '45em',
    },
    [theme.breakpoints.down("xs")]:{
      marginTop: 0,
      backgroundPosition: '70% 50%',
      backgroundSize: '80% 10em',
      height: '20em'
    },
  },

  blockContent: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    marginLeft: "5em",
    width: "45%",
    padding: "5em",
    [theme.breakpoints.down("lg")]:{
      width: "45%",
      padding: "3.5em",
    },
    [theme.breakpoints.down("md")]:{
      width: "50%",
      padding: "3.25em",
    },
    [theme.breakpoints.down("sm")]:{
      width: "60%",
      marginLeft: "2em",
    },
    [theme.breakpoints.down("xs")]:{
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: "1.5em",
      width: "80%",
      marginTop: "12em",
      marginLeft: "1em"
    },
  },

  title: {
    color: "#ffffff",
    textTransform: 'uppercase',
    fontSize: "2.5em",
    marginBottom: "1em",
    [theme.breakpoints.down("lg")]:{
      fontSize: "2em",
    },
    [theme.breakpoints.down("md")]:{
      fontSize: "1.4em",
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "1.3em",
    },
    [theme.breakpoints.down("xs")]:{
      fontSize: "1em",
    }
  },

  text: {
    color: "#ffffff",
    fontSize: "1.8em",
    textAlign: 'justify',
    [theme.breakpoints.down("lg")]:{
      fontSize: "1.3em",
    },
    [theme.breakpoints.down("md")]:{
      fontSize: "1.1em",
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "0.9em"
    },
    [theme.breakpoints.down("xs")]:{
      fontSize: "0.8em",
    }
  }
}));