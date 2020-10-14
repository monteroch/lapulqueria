import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomeIcon from '@material-ui/icons/Home';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import CommentIcon from '@material-ui/icons/Comment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import StorefrontIcon from '@material-ui/icons/Storefront';

import useStyles from './header.styles';
import logo from '../../assets/images/jarLogo.png';

const menuOptions = [
    { id: 0, icon: <img src={logo} alt="logo" style={{height: '25px'}}/>, title:null, drawerIcon:<HomeIcon style={{color: '#ffffff'}}/>, route: '/' },
    { id: 1, icon: null, title: 'Pulques', drawerIcon:<FreeBreakfastIcon style={{color: '#ffffff'}}/>, route: '/pulques' },
    { id: 2, icon: null, title: 'Boutique', drawerIcon:<StorefrontIcon style={{color: '#ffffff'}}/>, route: '/boutique' },
    { id: 3, icon: null, title: 'Eventos', drawerIcon:<DateRangeIcon style={{color: '#ffffff'}}/>, route: '/events' },
    { id: 4, icon: null, title: 'Contacto', drawerIcon:<CommentIcon style={{color: '#ffffff'}}/>, route: '/contact' },
    { id: 5, icon: null, title: 'Blog', drawerIcon:<ImportContactsIcon style={{color: '#ffffff'}}/>, route: '/blog' },
];

export default function Header(){

    const classes = useStyles();
    const theme = useTheme();
    const [tabIndex, changeTabIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    

    const changeTab = (event, index) => {
        changeTabIndex(index);
    };

    const tabs = (
        <Grid container direction='row' className={classes.gridContainer}>
            <Tabs value={tabIndex} onChange={changeTab} indicatorColor="primary">
                {
                    menuOptions.map(option => (
                        <Tab className={classes.labelText} icon={option.icon} key={option.id} label={option.title} component={Link} to={option.route}/>
                    ))
                }
            </Tabs>
        </Grid>
    );

    const drawer = (
        <React.Fragment>
            <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    onClick={() => setOpen(true)}
                    edge="start"
                >
                    <MenuIcon className={classes.icon}/>
                </IconButton>
                <Typography variant="h6" noWrap className={classes.companyName}>
                    La Pulquería
                </Typography>
            </Toolbar>
            <Drawer
                anchor="left"
                open={open}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={ () => setOpen(false)}>
                    <ChevronLeftIcon className={classes.icon} />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {
                        menuOptions.map(option => (
                            <ListItem button key={option.id} component={Link} to={option.route}>
                                <ListItemIcon>{option.drawerIcon}</ListItemIcon>
                                <ListItemText primary={option.title ? option.title : 'Home'}/>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <AppBar className={classes.headerContainer}>
            { matchesSM ? drawer : tabs }                
            </AppBar>
            {/* <div className={classes.appBarMargin}/> */}
        </React.Fragment>
    )

}