import React, {Component} from "react";

import {useNavigate} from "react-router-dom"

import Aux from "../../HOC/Auxi/Auxi";

import Burger from "../../Components/Layout/Burger/Burger";

import BuildControls from "../../Components/Layout/Burger/BuildControls/BuildControls";

import Modal from "../../Components/UI/Modal/Modal";

import OrderSummary from "../../Components/Layout/Burger/Ordersummary/Ordersummary";

import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'

import axios from '../../axiosOrder';


const INGREDIENTS_PRICES = {
  meat: 1.2,
  salad: 0.3,
  cheese: 0.7,
  bacon: 0.4,
}

class BurgerBuilder extends Component {
   state = {
    ingredients:{
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0,
    },
    totalprice: 4,
    purchasable: false,
    purchased: false,
   }
   componentDidMount () {
    console.log(this.props);
}
   purchaseCancelHandler = () => {
    this.setState({purchased: false});
   }
   about = () => {
    useNavigate();
  } 
   
   purchaseHandler = () => {
  //   this.setState({purchased: true});
  //  }
  //  continueHandler = () => {
  //   const data = {
  //     ingredients: this.state.ingredients,
  //     price: this.state.totalprice,
  //     CustomerDetails: {
  //       name: 'Tom E proctor',
  //       address: '234 New Avenue',
  //       zipCode: '43210',
  //     },
  //     DeliveryMethod: 'Express'
  //   }
  //    axios.post('/orders.json', data).then(response => {
  //     console.log(response)
  //    }).catch(error => {
  //     console.log(error)
  //    })
   }
  



   updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum,el) => {
      return sum + el;
    },0)
    this.setState({purchasable: sum > 0});
   }

   addIngredientHandler = (type) => {
     const oldCount = this.state.ingredients[type];
     const updatecount = oldCount + 1;
     const updatedIngredients = {
      ...this.state.ingredients
     }
     updatedIngredients[type] = updatecount;
     const priceAddition = INGREDIENTS_PRICES[type];
     const oldPrice = this.state.totalprice;
     const newPrice = oldPrice + priceAddition;
     this.setState({totalprice: newPrice, ingredients: updatedIngredients})
     this.updatePurchaseState(updatedIngredients)

   };
   removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
      return;
    }
     const updatecount = oldCount - 1;
     const updatedIngredients = {
      ...this.state.ingredients
     }
     updatedIngredients[type] = updatecount;
     const priceMinus = INGREDIENTS_PRICES[type];
     const oldPrice = this.state.totalprice;
     const newPrice = oldPrice - priceMinus;
     this.setState({totalprice: newPrice, ingredients: updatedIngredients})
     this.updatePurchaseState(updatedIngredients);
   };

    render(){
        const disabledInfo = {
          ...this.state.ingredients
        }
        for(let key in disabledInfo){
          disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
           <Aux>
             <Modal show={this.state.purchased} modalClosed={this.purchaseCancelHandler}>
              <OrderSummary ingredients={this.state.ingredients} purchaseCancel={this.purchaseCancelHandler} purchaseContinue={this.continueHandler}
              price={this.state.totalprice} />
             </Modal>
             <Burger ingredients={this.state.ingredients} />
             <BuildControls 
             ingredientAdded={this.addIngredientHandler}
             ingredientRemoved={this.removeIngredientHandler}
             disabled={disabledInfo}
             purchasable={this.state.purchasable}
             ordered={this.purchaseHandler}
             price={this.state.totalprice}/>
           </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);