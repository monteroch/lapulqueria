import React from 'react';
import useStyles from './pulques.styles';

export default function Pulques(){
    
    const classes = useStyles();

    return(
        <div className={classes.container}>
            This is the Pulques page
        </div>
    )

}