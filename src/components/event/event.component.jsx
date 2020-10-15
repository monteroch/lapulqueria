import React from 'react';
import { useStyles } from './event.styles';
import { Grid, Typography } from '@material-ui/core'

export const Event = ({ event }) => {

  const classes = useStyles();

  return(
    <Grid className={classes.eventItemContainer} container direction="row" xs={2}>
      <Grid container className={classes.dateContainer}>
        <Typography className={classes.month} >{event.date.split("/")[0].substr(0, 3)}</Typography>
        <Typography className={classes.day} >{event.date.split("/")[1]}</Typography>
      </Grid>
      <Grid container className={classes.eventInfo} >
        <Typography className={classes.eventTitle} >{event.title}</Typography>
        <Typography className={classes.eventDescription} >{event.description}</Typography>
      </Grid>
    </Grid>
  )

}
