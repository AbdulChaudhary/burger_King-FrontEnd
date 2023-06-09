import React from "react";

import classes from './Navigationitem.css'

const navigationItem = (props) => (
    <li className={classes.Navigationitem}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
        </li>
);

export default navigationItem;