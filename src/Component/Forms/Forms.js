import React from "react";


// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
          <Col md="6">
                <label>Nama Pemesan</label>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="6">
                <label>Nama Penerima</label>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
            <label>Nomor Telepon Pemesan</label>
              <FormGroup>
                <InputGroup className="mb-4">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Nomor Telepon Pemesan" type="string" />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="6">
            <label>Nomor Telepon Penerima</label>
              <FormGroup>
                <InputGroup className="mb-4">
                  <Input placeholder="Nomor Telepon Penerima" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="ni ni-zoom-split-in" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
                <label>Alamat Pengiriman Barang</label>
                <FormGroup>
                <Input
                    className="form-control-alternative"
                    placeholder="Write a large text here ..."
                    rows="3"
                    type="textarea"
                />
                </FormGroup>
            </Col>
            <Col md="4">
                <label>Kota</label>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="4">
                <label>Provinsi</label>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md="4">
                <label>Kode Pos</label>
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                    className="custom-control-input"
                    id="customCheck5"
                    type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck5">
                    Data Sudah Benar
                </label>
            </div>
            <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                <input
                    className="custom-control-input"
                    id="customCheck5"
                    type="checkbox"
                />
                <label className="custom-control-label" htmlFor="customCheck5">
                    Saya sudah memahami dan setuju dengan syarat dan ketentuan yang berlaku
                </label>
            </div>
          </Row>
        </Form>
      </>
    );
  }
}

export default Forms;