import React, { Component } from "react";
import axios from 'axios';
import ListCart from "./ListCart";

class CartModal extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=>{
            this.setState({
                post: result.data
            })
            console.log(result)
        })
    } 

    componentDidMount(){
        this.getPostAPI();
    }


    render(){
        return(
            <div className="modal-body">
                <div className="w-commerce-commercecartlist cart-list">
                {
                                                this.state.post.map(post => {
                                                    return <ListCart key={post.id} 
                                                    data={post}
                                                    />
                                                })
                                            }
                </div>
                <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem">
                                <div>Total</div>
                                <div className="w-commerce-commercecartordervalue">$30.00</div>
                            </div>
                        </div> 
            </div>
        )
    }
}

export default CartModal;