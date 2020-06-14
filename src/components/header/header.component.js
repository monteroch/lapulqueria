import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import useStyles from './header.styles';
import logo from '../../assets/images/jarLogo.png';


export default function Header(){

    const classes = useStyles();
    const [tabIndex, changeTabIndex] = React.useState(0);

    const changeTab = (event, index) => {
        changeTabIndex(index);
    };

    return(
        <AppBar className={classes.headerContainer}>
            <Grid container direction='row' className={classes.gridContainer}>
                <Button className={classes.logoContainer}>
                    <img alt="company-logo" src={logo} className={classes.logo}/>
                </Button>
                <Tabs value={tabIndex} onChange={changeTab}>
                    <Tab className={classes.labelText} label="Pulques"/>
                    <Tab className={classes.labelText} label="Boutique"/>
                    <Tab className={classes.labelText} label="Eventos"/>
                    <Tab className={classes.labelText} label="Contacto"/>
                    <Tab className={classes.labelText} label="Blog"/>
                </Tabs>
            </Grid>
        </AppBar>
    )

}