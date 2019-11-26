import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';

const Login = () => {
  return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="10">
                <form>
                    <div className="grey-text">
                    <MDBInput
                        label="Username"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Password"
                        icon="lock"
                        group
                        type="password"
                        validate
                    />
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>    
  );
};

export default Login;