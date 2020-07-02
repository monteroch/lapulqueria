import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Styles
import useStyles from './blockImage.styles';

export default function BlockImage({title, children, image, imgPosition}){

  const classes = useStyles();

  return(
    <Grid container item 
      className={`${classes.imgContainer} ${imgPosition === "end" ?  classes.imageEnd : classes.imageStart}`} 
      alignItems="center"
      justify={imgPosition === "end" ? undefined : "flex-end"}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Grid item className={`${classes.blockContent} ${imgPosition === "end" ?  classes.blockStart : classes.blockEnd}`}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography variant='body1' className={classes.text}>{children}</Typography>
      </Grid>
    </Grid>
  )

}

