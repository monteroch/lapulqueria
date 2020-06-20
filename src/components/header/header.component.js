import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import useStyles from './header.styles';
import logo from '../../assets/images/jarLogo.png';

const menuOptions = [
    { id: 0, icon: <img src={logo} alt="logo" style={{height: '25px'}}/>, title: null, route: '/' },
    { id: 1, icon: null, title: 'Pulques', route: '/pulques' },
    { id: 2, icon: null, title: 'Boutique', route: '/boutique' },
    { id: 3, icon: null, title: 'Eventos', route: '/events' },
    { id: 4, icon: null, title: 'Contacto', route: '/contact' },
    { id: 5, icon: null, title: 'Blog', route: '/blog' },
];

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
                    <Tabs value={tabIndex} onChange={changeTab} indicatorColor="primary">
                    {
                        menuOptions.map(option => (
                            <Tab className={classes.labelText} icon={option.icon} key={option.id} label={option.title} component={Link} to={option.route}/>
                        ))
                    }
                    </Tabs>
                </Grid>
            </AppBar>
            <div className={classes.appBarMargin}/>
        </React.Fragment>
    )

}