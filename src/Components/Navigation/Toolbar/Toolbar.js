import React from 'react';

import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';

import NavigationItems from './Navigationitems/Navigationitems';

import DrawerToggle from './Sidedrawer/Drawertoggle/Drawertoggle';


const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
           <Logo />
        </div>
        <nav className={classes.Gayab}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;