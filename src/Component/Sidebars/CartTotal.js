import React, { Component } from "react";
import Cart from "../Modals/Cart";


class CartTotal extends Component{
    render(){
        return(
            <div className="w-cart-review cart-review">
                <div className="w-commerce-commercecartheader cart-header">
                    <h5 className="w-commerce-commercecartheading">Total Biaya</h5>            
                </div>
                <div className="w-commerce-commercecartformwrapper">
                    <form className="w-commerce-commercecartform">
                        <Cart/>
                        <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem">
                                <div>Subtotal</div>
                                <div className="w-commerce-commercecartordervalue">$30.00</div>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }
}

export default CartTotal;