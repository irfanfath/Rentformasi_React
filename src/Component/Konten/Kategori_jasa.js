import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Kategori_jasa extends Component{
    render(){
        return(
            <div className="shop-categories-wrapper"><a href="/catalog" className="shop-category-link w--current">Perlengkapan Gunung</a>
                <div className="w-dyn-list">
                    <div className="shop-categories w-dyn-items">
                        <div className="w-dyn-item"><a href="/category/wooden-toys" className="shop-category-link">kendaraan</a></div>
                        <div className="w-dyn-item"><a href="/category/stuffed-animals" className="shop-category-link">Alat Elektronik</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kategori_jasa;