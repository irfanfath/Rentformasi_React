import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ButtonSuccess from "../Button/ButtonSuccess";
import CartModal from "../Cart/CartModal";
import {
    Modal
  } from "reactstrap";

class HalamanUtama extends Component{
    state = {
        exampleModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

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
                            <div className="w-commerce-commercecartopenlink cart-button w-inline-block">
                                <div className="w-inline-block" onClick={() => this.toggleModal("exampleModal")}>Keranjang</div>
                                <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg" alt="" className="cart-icon" onClick={() => this.toggleModal("exampleModal")} />
                                <div className="w-commerce-commercecartopenlinkcount item-count" onClick={() => this.toggleModal("exampleModal")}>0</div>
                            </div>
                            <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.exampleModal}
                                toggle={() => this.toggleModal("exampleModal")}
                                >
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                    Keranjang Anda
                                    </h5>
                                    <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() => this.toggleModal("exampleModal")}
                                    >
                                    <span aria-hidden={true}>×</span>
                                    </button>
                                </div>
                                <CartModal/>
                                <div className="modal-footer">
                                    <input type="submit" value="Sewa Lagi" className="w-commerce-commerceaddtocartbutton button" 
                                    onClick={() => this.toggleModal("exampleModal")}/>
                                    <NavLink to="/proses_transaksi" className="nav-link-product w-nav-link">
                                    <input type="submit" value="Bayar Sekarang" className="w-commerce-commerceaddtocartbutton button"
                                    onClick={() => this.toggleModal("exampleModal")}/>
                                    </NavLink>
                                </div>
                            </Modal>
                        </div>
                        <NavLink to="/akun" className="nav-link w-nav-link"><ButtonSuccess/></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default HalamanUtama;