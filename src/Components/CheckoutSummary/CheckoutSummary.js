import React from "react"

import Burger from "../Layout/Burger/Burger"

import Button from "../UI/Button/Button"

import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
   return (
    <div className={classes.CheckoutSummary}>
        <h1>We Hope it Taste Well</h1>
        <div style={{width: '100%', margin: 'auto'}}>
              <Burger ingredients={props.ingredients}/>
        </div>
        <Button clicked btnType="Danger">Cancel</Button>
        <Button clicked btnType="Success">Continue</Button>
    </div>
   )
}

export default checkoutSummary