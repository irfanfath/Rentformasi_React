import React, { Component } from "react";
import axios from 'axios';
import ListCart from "./ListCart";

class CartModal extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${data}`).then((res)=>{
            this.getPostAPI()
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
                            remove={this.handleRemove}
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