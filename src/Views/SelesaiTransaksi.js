import React from "react";
import { NavLink } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";

const SelesaiTransaksi = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <hr className="mb-5 mt-4" />
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg"
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">Terima Kasih</a>
                </h2>
                <p>Apabila 1 x 24 jam pembayaran belum terkonfirmasi harap hubungi kami</p>
                <NavLink to="/selesaitransaksi" className="nav-link-product w-nav-link">
                    <input type="submit" value="Lihat Status Transaksi" className="w-commerce-commerceaddtocartbutton button" />
                </NavLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default SelesaiTransaksi;