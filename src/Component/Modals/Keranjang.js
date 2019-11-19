import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

// reactstrap components
import {
  Modal
  
} from "reactstrap";

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
          <div className="modal-body">
                        <div className="w-commerce-commercecartlist cart-list">
                            <div className="w-commerce-commercecartitem">
                                <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="70px" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" />
                                    <div className="w-commerce-commercecartiteminfo">
                                        <div className="w-commerce-commercecartproductname">Teddy Bear</div>
                                        <div>$30.00</div>
                                        <div className="cart-remove-link">Remove</div>
                                    </div>
                            </div>
                            <div className="w-commerce-commercecartitem">
                                <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="70px" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" />
                                    <div className="w-commerce-commercecartiteminfo">
                                        <div className="w-commerce-commercecartproductname">Teddy Bear</div>
                                        <div>$30.00</div>
                                        <div className="cart-remove-link">Remove</div>
                                    </div>
                            </div>
                        </div>
                        <div className="w-commerce-commercecartfooter cart-footer">
                            <div className="w-commerce-commercecartlineitem">
                                <div>Subtotal</div>
                                <div className="w-commerce-commercecartordervalue">$30.00</div>
                            </div>
                        </div> 
          </div>
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