import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import {
  Modal
  
} from "reactstrap";
import Cart from "./Cart";

class Keranjang extends React.Component {
  state = {
    exampleModal: false
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render() {
    return (
      <>
        {/* Button trigger modal */}
        <div className="w-commerce-commercecartopenlink cart-button w-inline-block">
            <div className="w-inline-block" onClick={() => this.toggleModal("exampleModal")}>Keranjang</div>
            <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg" alt="" className="cart-icon" onClick={() => this.toggleModal("exampleModal")} />
            <div className="w-commerce-commercecartopenlinkcount item-count" onClick={() => this.toggleModal("exampleModal")}>0</div>
        </div>
        {/* Modal */}
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
          <Cart/>
          <div className="modal-footer">
            <input type="submit" value="Sewa Lagi" className="w-commerce-commerceaddtocartbutton button" 
            onClick={() => this.toggleModal("exampleModal")}/>
            <NavLink to="/proses_transaksi" className="nav-link-product w-nav-link">
                <input type="submit" value="Bayar Sekarang" className="w-commerce-commerceaddtocartbutton button" />
            </NavLink>
          </div>
        </Modal>
      </>
    );
  }
}

export default Keranjang;