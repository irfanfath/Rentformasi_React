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
                            id="pembayaranradios1"
                            />
                            <Form.Check
                            type="radio"
                            label="Kartu Kredit"
                            name="formHorizontalRadios"
                            id="pembayaranradios2"
                            />
                            <Form.Check
                            type="radio"
                            label="Cash"
                            name="formHorizontalRadios"
                            id="pembayaranradios3"
                            />
                        </Col>
                    </div> 
                    </form>
                </div>
            </div>
        )
    }
}

export default MetodePembayaran;