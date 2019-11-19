import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Cart extends Component{
    render(){
        return(
            <div className="w-cart-review cart-review">
                <div className="w-commerce-commercecartheader cart-header">
                    <h5 className="w-commerce-commercecartheading">Total Biaya</h5>            
                </div>
                <div className="w-commerce-commercecartformwrapper">
                    <form className="w-commerce-commercecartform">
                        <div className="w-commerce-commercecartlist cart-list">
                            <div className="w-commerce-commercecartitem">
                                <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="50px" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" />
                                    <div className="w-commerce-commercecartiteminfo">
                                        <div className="w-commerce-commercecartproductname">Teddy Bear</div>
                                        <div>$30.00</div>
                                        <div className="cart-remove-link">Remove</div>
                                    </div>
                            </div>
                            <div className="w-commerce-commercecartitem">
                                <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="50px" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" />
                                    <div className="w-commerce-commercecartiteminfo">
                                        <div className="w-commerce-commercecartproductname">Teddy Bear</div>
                                        <div>$30.00</div>
                                        <div className="cart-remove-link">Remove</div>
                                    </div>
                            </div>
                        </div>
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

export default Cart;