import React from "react";
import { MDBInput } from "mdbreact";
import { Col, Row } from "reactstrap";

const InputPage = () => {
  return (
    <div className="form-group">
      <Row>
        <Col md="6">
          <MDBInput label="Nama Pemesan" />
        </Col>
        <Col md="6">
          <MDBInput label="Nama Penerima" />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <MDBInput label="Nomor Telepon Pemesan" type="number" />
        </Col>
        <Col md="6">
          <MDBInput label="Nomor Telepon Penerima" type="number" />
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <MDBInput type="textarea" label="Alamat Pengiriman" rows="5" />
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <MDBInput label="Kota/Kabupaten" />
        </Col>
        <Col md="4">
          <MDBInput label="Provinsi" />
        </Col>
        <Col md="4">
          <MDBInput label="Kode Pos" type="number" />
        </Col>
      </Row>
      
      
      
    </div>
  );
}

export default InputPage;