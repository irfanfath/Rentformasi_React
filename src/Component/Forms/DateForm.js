import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateForm extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker className="input subscribe-input w-input"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      
    );
  }
}

export default DateForm;