import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import { connect } from 'react-redux'
import { addToCart } from '../Component/Actions/CartAction'
import Cari from "../Component/Konten/Cari";
import Sorting from "../Component/Konten/Sorting";
import Kategori from "../Component/Sidebars/Kategori";
import PaginationPage from "../Component/Pagination/PaginationPage";

 class Sewaan extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    handleDetail = (id) => {
        this.props.history.push(`/product_detail/${id}`);
    }
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="product-barang-wrapper w-dyn-item" key={item.id}>
                        <div className="product-card w-inline-block" onClick={()=>{this.handleDetail(item.id)}}>
                            <img src={item.img} alt={item.title}/>
                            <span className="product-card-heading">{item.title}</span>
                            <div className="product-card-price">${item.price}</div>
                        </div>
                        <NavLink to="/cart" className="nav-link-product w-nav-link">
                            <span className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </NavLink>
                </div>

            )
        })

        return(
            <div className="section">
            <Cari/>          
            <div className="wrapper">
                <div className="shop-header">
                    <h3 className="no-margin w-hidden-small w-hidden-tiny">Semua Barang</h3>
                    <Sorting/>
                    <div className="shop-header-line">
                        <div className="shop-header-color green w-hidden-small w-hidden-tiny"></div>
                    </div>
                </div>

                <div className="section no-padding-top">
                    <div className="full-width w-dyn-list">
                        <div className="boxbarang">
                            <div className="delivery-info w-richtext">
                                    <div className="products w-dyn-items">
                                    {itemList}
                                    </div>
                            </div>
                            <Kategori/>
                        </div>
                    </div>
                </div>
                <PaginationPage/>                                  
            </div>
        </div>
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sewaan)