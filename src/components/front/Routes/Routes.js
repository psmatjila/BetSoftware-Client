import React from 'react';
import { Route, Switch} from "react-router-dom";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";

const Routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct,handleCardClearence}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/signin" exact>
                    <Signin />
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCardClearence={handleCardClearence}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
