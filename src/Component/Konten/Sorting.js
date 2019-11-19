import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Urutan from "../Dropdowns/Urutan";
import Lokasi from "../Dropdowns/Lokasi";

class Kategori_barang extends Component{
    render(){
        return(
            <div className="shop-categories-wrapper">
                <div className="w-dyn-list">
                    <div className="shop-categories w-dyn-items">
                        <div className="w-dyn-item"><Urutan/></div>
                        <div className="w-dyn-item"><Lokasi/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kategori_barang;