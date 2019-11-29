import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MetodePembayaran from "../Component/Sidebars/MetodePembayaran";
import CartTotal from "../Component/Sidebars/CartTotal";
import InputPage from "../Component/Forms/InputPage";

class Proses_Transaksi extends Component{

    render(){
        return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="contacts">
                            <div className="contact-form-wrapper">
                                <h4 className="contact-heading">Lengkapi Data Anda</h4>
                                <InputPage/>
                                <NavLink to="/konfirmasi" className="nav-link-product w-nav-link">
                                    <input type="submit" value="Sewa Sekarang" className="w-commerce-commerceaddtocartbutton button" />
                                </NavLink>
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