import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import useStyles from './header.styles';
// import {useTheme} from '@material-ui/core/styles';
import logo from '../../assets/images/jarLogo.png';



export default function Header(){

    const classes = useStyles();
    // const theme = useTheme();
    const [tabIndex, changeTabIndex] = React.useState(0);
    

    const changeTab = (event, index) => {
        changeTabIndex(index);
    };

    return(
        <React.Fragment>
            <AppBar className={classes.headerContainer}>
                <Grid container direction='row' className={classes.gridContainer}>
                    <Button className={classes.logoContainer} component={Link} to='/'>
                        <img alt="company-logo" src={logo} className={classes.logo}/>
                    </Button>
                    <Tabs value={tabIndex} onChange={changeTab} indicatorColor="primary">
                        <Tab className={classes.labelText} label="Pulques" component={Link} to='/pulques'/>
                        <Tab className={classes.labelText} label="Boutique" component={Link} to='/boutique'/>
                        <Tab className={classes.labelText} label="Eventos" component={Link} to='/events'/>
                        <Tab className={classes.labelText} label="Contacto" component={Link} to='/contact'/>
                        <Tab className={classes.labelText} label="Blog" component={Link} to='/blog'/>
                    </Tabs>
                </Grid>
            </AppBar>
            <div className={classes.appBarMargin}/>
        </React.Fragment>
    )

}