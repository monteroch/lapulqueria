import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

import useStyles from './section.styles';

export default function Section({backgroundColor, image, title, children, imgPosition }){

    const classes = useStyles();
    const theme = useTheme();

    return(
        <Grid item container 
            direction={imgPosition === 'left' ? 'row' : 'row-reverse'}
            className={classes.section} 
            style={{backgroundColor: backgroundColor}}
        >
            <Grid item 
                xl={6} md={12} xs={12}
                className={classes.sectionImage} 
                style={{backgroundImage: `url(${image})`}} 
            />
            <Grid item container 
                xl={6} md={12} xs={12} 
                className={classes.sectionContent} 
            >
                <Typography className={classes.sectionTitle}>{title}</Typography>
                <Typography className={classes.sectionText}>
                    {children}
                </Typography>
            </Grid>
        </Grid>
    )
    
}