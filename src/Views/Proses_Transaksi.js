import React, { Component } from "react";
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