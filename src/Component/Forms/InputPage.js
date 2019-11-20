import React from "react";
import { MDBInput } from "mdbreact";
import { Col, Row } from "reactstrap";

const InputPage = () => {
  return (
    <div className="form-group">
      <Row>
        <Col md="5">
          <MDBInput label="Nama Pemesan" />
        </Col>
        <Col md="5">
          <MDBInput label="Nama Penerima" />
        </Col>
      </Row>
      <Row>
        <Col md="5">
          <MDBInput label="Nomor Telepon Pemesan" type="number" />
        </Col>
        <Col md="5">
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
      <Row>
            <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                    Data Sudah Benar
                </label>
            </div>
            <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                    className="custom-control-input"
                    id="customCheck2"
                    type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck2">
                    Saya sudah memahami dan setuju dengan syarat dan ketentuan yang berlaku
                </label>
            </div>
          </Row>
      
      
      
    </div>
  );
}

export default InputPage;