import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import {
  Modal
  
} from "reactstrap";
import CartModal from "../Cart/CartModal";

class ModalsCart extends React.Component {
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
        <input type="submit" value="Sewa Sekarang" className="w-commerce-commerceaddtocartbutton button" 
        onClick={() => this.toggleModal("exampleModal")}/>
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
          <CartModal/>
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

export default ModalsCart;