import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Keranjang from "../Modals/Keranjang";
import ButtonSuccess from "../Button/ButtonSuccess";

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
                            </nav>
                            <Keranjang/>
                        </div>
                        <NavLink to="/akun" className="nav-link w-nav-link"><ButtonSuccess/></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default HalamanUtama;