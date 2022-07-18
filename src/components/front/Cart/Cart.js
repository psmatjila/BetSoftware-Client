import React from 'react'
import "./Cart.css";

const Cart = ({cartItems, handleAddProduct,handleRemoveProduct,handleCardClearence}) => {

const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price,0)
    return (
        <div className="cart-items">
           <div className="cart-items-header">Cart Items</div>

           {cartItems.length === 0 && <div className="cart-items-no-items">No items were selected.</div>}
        
            <div>
               {cartItems.map((cartItem) => (
                   <div key={cartItem.id} className="cart-items-list">
                   <img className="cart-items-image" src={cartItem.image} alt={cartItem.name}/>
                   
                   <div className="cart-items-name">{cartItem.name}</div>
                   <div className="cart-items-function">
                        <div className="cart-items-add" onClick={() => handleAddProduct(cartItem)}>+</div>
                        <div className="cart-items-remove" onClick={() => handleRemoveProduct(cartItem)}>-</div>
                   </div>

                   <div>{cartItem.quantity} * R {cartItem.quantity * cartItem.price}.00</div>
                   </div>))}
            </div>
           <div className="cart-total-price">
               Total Price: 
               <div className="cart-Items-total-price">
                  R {totalPrice}.00
               </div>  
           </div>
           <div className="cart-clear">
               {cartItems.length >= 1 && (<button className="cart-button-clearence" onClick={() => handleCardClearence(cartItems)}>Clear Cart</button> )}
               
               {cartItems.length >= 1 && (<button className="cart-button-clearence" onClick={() => handleCardClearence(cartItems)}>Checkout Items</button> )}
           </div>
           
        </div>    
    )
}

export default Cart
