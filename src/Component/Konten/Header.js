import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Keranjang from "../Modals/Keranjang";

class HalamanUtama extends Component{
    render(){
        return(
            <div data-collapse="medium" data-animation="default" data-duration="400" className="nav-bar w-nav">
                <div className="nav-main">
                    <div className="wrapper nav-bar-wrapper">
                        <NavLink to="/" className="brand w-nav-brand w--current">
                                Rentformasi
                        </NavLink>
                        <div className="navigation">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <NavLink to="/barang" className="nav-link w-nav-link">Sewa Barang</NavLink>
                                <NavLink to="/jasa" className="nav-link w-nav-link">Sewa Jasa</NavLink>
                                <NavLink to="/bantuan" className="nav-link w-nav-link">Bantuan</NavLink>
                                <NavLink to="/akun" className="nav-link w-nav-link">Masuk/Daftar</NavLink>                              
                            </nav>
                            <Keranjang/>
                            {/* <NavLink to="/cart" className="w-commerce-commercecartopenlink cart-button w-inline-block">
                                    <div className="w-inline-block">Keranjang</div>
                                    <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg" alt="" className="cart-icon" />
                                    <div className="w-commerce-commercecartopenlinkcount item-count">0</div>
                            </NavLink> */}
                            <div className="menu-button w-nav-button">
                                <div className="w-icon-nav-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HalamanUtama;