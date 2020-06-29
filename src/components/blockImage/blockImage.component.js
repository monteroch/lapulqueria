import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Styles
import useStyles from './blockImage.styles';

export default function BlockImage({title, children}){

  const classes = useStyles();

  return(
    <Grid container item className={classes.imgContainer} alignItems="center">
      <Grid item className={classes.blockContent}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography variant='body1' className={classes.text}>{children}</Typography>
      </Grid>
    </Grid>
  )

}

