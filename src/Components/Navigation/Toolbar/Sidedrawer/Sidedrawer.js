import React from "react";

import classes from './Sidedrawer.css';

import Logo from "../../../Logo/Logo";

import NavigationItems from "../Navigationitems/Navigationitems";

import Backdrop from "../../../UI/Backdrop/Backdrop";

import Aux from "../../../../HOC/Auxi/Auxi";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Band];
    if (props.Show) {
        attachedClasses = [classes.SideDrawer, classes.Khul];
    }

    return(
        <Aux>
        <Backdrop show={props.Show} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
              <Logo />
            </div>
          <nav>
             <NavigationItems />
          </nav>
        </div>
        </Aux>
    )
}

export default sideDrawer;