import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon } from "mdbreact";

const PageProfile = () => {
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce narrow>
      <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(5).jpg" waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          Shoes
        </MDBCardTitle>
        <MDBCardTitle>
          <a href="#!"><strong>Product name</strong></a>
        </MDBCardTitle>
        <MDBCardText>
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">500 Transaksi</span>
          <span className="float-right">
            <div className="rating">
              <MDBIcon icon="star" />
              <MDBIcon icon="star" />
              <MDBIcon icon="star" />
              <MDBIcon icon="star" />
              <MDBIcon far icon="star" />
            </div>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
}

export default PageProfile;