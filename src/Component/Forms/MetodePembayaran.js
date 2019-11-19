import React, { Component } from "react";
import { Col, Form} from 'react-bootstrap';

class MetodePembayaran extends Component{
    render(){
        return(
            <div className="w-cart-review cart-review">
                <div className="w-commerce-commercecartheader cart-header">
                    <h5 className="w-commerce-commercecartheading"> Pilih Metode Pembayaran</h5>            
                </div>
                <div className="w-commerce-commercecartformwrapper">
                    <form className="w-commerce-commercecartform">  
                    <div className="w-commerce-commercecartlist cart-list">    
                        <Col md={10}>
                            <Form.Check
                            type="radio"
                            label="Transfer Bank"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Kartu Kredit"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="Cash"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            />
                        </Col>
                    </div>
                        <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem">
                                <div>Biaya Pengiriman</div>
                                <div className="w-commerce-commercecartordervalue">$30.00</div>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }
}

export default MetodePembayaran;