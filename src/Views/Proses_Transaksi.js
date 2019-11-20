import React, { Component } from "react";
import axios from "axios"
import MetodePembayaran from "../Component/Forms/MetodePembayaran";
import CartTotal from "../Component/Sidebars/CartTotal";
import InputPage from "../Component/Forms/InputPage";

class Proses_Transaksi extends Component{
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.idBarang;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            console.log('result: ', res);
            let post = res.data;
            this.setState({
                post : {
                    title: post.title,
                    body: post.body
                }
            })
        })
        
    }

    render(){
        return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="contacts">
                            <div className="contact-form-wrapper">
                                <h4 className="contact-heading">Lengkapi Data Anda</h4>
                                <InputPage/>
                                <input type="submit" value="Sewa Sekarang" className="w-commerce-commerceaddtocartbutton button" />
                            </div>
                            <div className="contact-info">
                                <CartTotal/>
                                <MetodePembayaran/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Proses_Transaksi;