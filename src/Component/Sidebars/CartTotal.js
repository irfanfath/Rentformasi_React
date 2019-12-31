import React, { Component } from "react";
import { connect } from 'react-redux'
import { Col, Form} from 'react-bootstrap';

class CartTotal extends Component{
    componentWillUnmount() {
        if(this.refs.shipping.checked)
             this.props.substractShipping()
   }

   handleChecked = (e)=>{
       if(e.target.checked){
           this.props.addShipping();
       }
       else{
           this.props.substractShipping();
       }
   }

    render(){
        return(
            <div className="w-cart-review cart-review">
                <div className="w-commerce-commercecartheader cart-header">
                    <h5 className="w-commerce-commercecartheading">Total Biaya</h5>            
                </div>
                <div className="w-commerce-commercecartformwrapper">
                    <form className="w-commerce-commercecartform">
                        <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem">
                                <div>Biaya Sewa</div>
                                <div className="w-commerce-commercecartordervalue">${this.props.total}</div>
                            </div>
                        </div> 
                        <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem">
                                <div>Pilih Jenis Pengiriman</div>
                            </div>
                            <div className="w-commerce-commercecartlist cart-list">    
                                    <label>
                                        <Form.Check 
                                            type="radio" 
                                            ref="shipping" 
                                            onChange= {this.handleChecked} 
                                            label = "JNE"
                                            name="formHorizontalRadios"
                                            id="pengirimanradios1"
                                        />
                                        <Form.Check 
                                            type="radio" 
                                            ref="shipping" 
                                            onChange= {this.handleChecked} 
                                            label = "TIKI"
                                            name="formHorizontalRadios"
                                            id="pengirimanradios2"
                                        />
                                        <Form.Check 
                                            type="radio" 
                                            ref="shipping" 
                                            onChange= {this.handleChecked} 
                                            label = "COD"
                                            name="formHorizontalRadios"
                                            id="pengirimanradios3"
                                        />
                                    </label>
                            </div> 
                        </div> 
                        <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem">
                                <div>Subtotal</div>
                                <div className="w-commerce-commercecartordervalue">: ${this.props.total}</div>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartTotal)