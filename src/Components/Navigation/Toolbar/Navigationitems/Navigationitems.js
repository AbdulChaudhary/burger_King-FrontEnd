import React from "react";

import classes from './Navigationitems.css'

import NavigationItem from "./Navigationitem/Navigationitem";

const navigationItems = (props) => (
    <ul className={classes.Navigationitems} >
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;