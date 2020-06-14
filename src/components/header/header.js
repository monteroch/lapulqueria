import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/jarLogo.png';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        backgroundColor: theme.palette.common.darkGray,
        height: '45px',
        justifyContent: 'center'
    },
    gridContainer: {
        justifyContent: 'center'
    },
    logoContainer: {
        width: "100px"
    },
    logo: {
        height: '25px'
    },
    labelText: {
        textTransform: "none"
    }
}));

export default function Header(){

    const classes = useStyles();

    return(
        <AppBar className={classes.headerContainer}>
            <Grid container direction='row' className={classes.gridContainer}>
                <Button className={classes.logoContainer}>
                    <img alt="company-logo" src={logo} className={classes.logo}/>
                </Button>
                <Tabs>
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