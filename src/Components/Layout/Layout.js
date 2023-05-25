import React, { Component } from "react";

import Aux from "../../HOC/Auxi/Auxi";

import classes from './Layout.css';

import Toolbar from "../Navigation/Toolbar/Toolbar";

import Sidedrawer from "../Navigation/Toolbar/Sidedrawer/Sidedrawer";



class Layout extends Component {
   state = {
      showSidedrawer: true
   }

   sideDrawerClosedHandler = () => {
      this.setState({showSidedrawer: false});
   }

   sideDrawerToggleHandler = () => {
      this.setState((prevState) => {
        return {showSidedrawer: !prevState.showSidedrawer}
      })
   }

   render () {
      return(
         <Aux>
         <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
         <Sidedrawer Show={this.state.showSidedrawer} closed={this.sideDrawerClosedHandler}/>
          <main className={classes.Content}>
            {this.props.children}
          </main>
         </Aux>
    ) 
  }
}


export default Layout;