import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Images
import doge from '../../assets/images/doge.png';

//Styles
import useStyles from './blog.styles';

export default function Blog(){


    return(
        <Grid container direction='column' alignItems="center">
           <img src={doge} alt="muscle-doge" width="1000px"/>
           <Typography style={{fontSize: "3em"}}>The contact's page is under construction</Typography>
        </Grid>
    )

}