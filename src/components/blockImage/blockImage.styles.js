import { makeStyles, usetTheme } from '@material-ui/core/styles';

import background from '../../assets/images/mm.jpg';

export default makeStyles(theme => ({
  imgContainer: {
    marginTop: "5em",
    backgroundImage: `url(${background})`,
    backgroundPosition: '90% 50%',
    backgroundSize: '70% 90%',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%'
  },
  blockContent: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    marginLeft: "5em",
    width: "45%",
    padding: "5em"
  },
  title: {
    color: "#ffffff",
    textTransform: 'uppercase',
    fontSize: "3em",
    marginBottom: "1em"
  },
  text: {
    color: "#ffffff",
    fontSize: "2em",
    textAlign: 'justify'
  }
}));