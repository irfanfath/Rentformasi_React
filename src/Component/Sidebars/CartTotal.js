import React, { Component } from "react";
import Cart from "../Modals/Cart";
import { Col, Form} from 'react-bootstrap';

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
                                <div>Pilih Jasa Pengiriman</div>
                            </div>
                            <div className="w-commerce-commercecartlist cart-list">    
                                <Col md={4}>
                                    <Form.Check
                                    type="radio"
                                    label="JNE"
                                    name="formHorizontalRadios"
                                    id="pengirimanradios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="SICEPAT"
                                    name="formHorizontalRadios"
                                    id="pengirimanradios2"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="COD"
                                    name="formHorizontalRadios"
                                    id="pengirimanradios3"
                                    />
                                </Col>
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

export default CartTotal;