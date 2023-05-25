import React from "react";

import Aux from "../../../../HOC/Auxi/Auxi";

import Button from "../../../UI/Button/Button";

const orderSummary = (props) => {
   const ingredientSummarry = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
   })

  return (
    <Aux>
     <h2>Your Order</h2>
     <p>A Delecious Burger With Following Ingredients:</p>
     <ul>
        {ingredientSummarry}
     </ul>
     <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
     <Button btnType="Danger" clicked={props.purchaseCancel} >Cancel</Button>
     <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
    </Aux>
  )
} 

export default orderSummary;