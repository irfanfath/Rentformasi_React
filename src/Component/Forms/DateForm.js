import React, { Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateForm extends React.Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

 
  render() {
    return (
      <Fragment>
      <DatePicker className="input subscribe-input w-input"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      &nbsp;&nbsp;
      <DatePicker className="input subscribe-input w-input"
        selected={this.state.endDate}
        onChange={this.handleChange}
      />
      </Fragment>
      
      
    );
  }
}

export default DateForm;