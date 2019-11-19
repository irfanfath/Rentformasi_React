import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Cari extends Component{
    render(){
        return(
        <div className="section no-padding-top">
            <div className="wrapper side-paddings">
                <div data-w-id="e89551e9-b5ae-51a6-c418-02c90497790c" className="subscribe">
                    <div className="w-form">
                        <form id="wf-form-Subscribe-Form" name="wf-form-Subscribe-Form" data-name="Subscribe Form" className="subscribe-form">
                            <input type="email" className="input subscribe-input w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Nama Barang" id="email-2" required="" />
                            <input type="email" className="input subscribe-input w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Kategori Barang" id="email-2" required="" />
                            <input type="email" className="input subscribe-input w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Tanggal Sewa" id="email-2" required="" />
                            <input type="email" className="input subscribe-input w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Tanggal Kembali" id="email-2" required="" />
                            <input type="submit" value="Cari Barang" className="w-commerce-commerceaddtocartbutton button" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Cari;