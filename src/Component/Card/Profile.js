import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <CardImg
            alt="..."
            src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg"
            top
          />
          <CardBody>
            <CardTitle>Profile Vendor</CardTitle>
            <CardText>
              deskripsi soal vendor 
            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Go somewhere
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Profile;