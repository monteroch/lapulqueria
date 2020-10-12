import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  eventItemContainer: {
    borderColor: "#000000",
    border: "2px solid",
    height: "50%",
    margin: "10px"
  },
  dateContainer: {
    backgroundColor: "rgb(0, 0, 0)",
    color: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignContent: 'center'
  },
  eventInfo: {
    width: "100%"
  }
}));
