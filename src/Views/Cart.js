import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../Component/Actions/CartAction'
import Recipe from './Recipe';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(         
                                <div className="w-commerce-commercecartitem" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="w-commerce-commercecartiteminfo">
                                        <p className="title">{item.title}</p>
                                        <p>{item.desc}</p>
                                        <p><b className="label">Harga : Rp. {item.price}</b></p> 
                                        <p><b className="label">Quantity : {item.quantity}</b>
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>+</i></Link>
                                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</i></Link>
                                        </p>
                                        {/* <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>+</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</i></Link>
                                        </div> */}
                                        <p><label className="label">Tanggal Sewa : </label>
                                            26/12/2019 - 28/12/2019
                                        </p>
                                        <button className="cart-remove-link" onClick={()=>{this.handleRemove(item.id)}}>Batalkan Pesanan</button>
                                    </div>                                    
                                </div>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="contacts">
                            <div className="contact-form-wrapper">
                                <h4 className="contact-heading">Keranjang Belanja Anda : </h4>
                                {addedItems}
                                <Recipe/>
                            </div>
                            <div className="checkout">
                                <NavLink to="/sewaan" className="nav-link-product w-nav-link">
                                    <input type="submit" value="Sewa Lagi" className="w-commerce-commerceaddtocartbutton button" />
                                </NavLink>
                                <NavLink to="/proses_transaksi" className="nav-link-product w-nav-link">
                                    <input type="submit" value="Bayar Sekarang" className="w-commerce-commerceaddtocartbutton button" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)