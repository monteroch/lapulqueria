import React from 'react';
import { useStyles } from './event.styles';
import { Grid, Typography } from '@material-ui/core'

export const Event = ({ event }) => {

  const classes = useStyles();

  return(
    <Grid className={classes.eventItemContainer} container direction="row" xs={2}>
      <Grid container className={classes.dateContainer}>
        <Typography>{event.date}</Typography>
      </Grid>
      <Grid container>
        <Typography>{event.title}</Typography>
        <Typography>{event.description}</Typography>
        <Typography>{event.image}</Typography>
      </Grid>
    </Grid>
  )

}
