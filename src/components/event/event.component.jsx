import React from 'react';
import useStyles from './event.styles';
import { Grid, Typography } from '@material-ui/core'

export const Event = ({ event }) => {


  return(
    <Grid>
      <Typography>{event.title}</Typography>
      <Typography>{event.description}</Typography>
      <Typography>{event.date}</Typography>
      <Typography>{event.image}</Typography>
    </Grid>
  )

}
