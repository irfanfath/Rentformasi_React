import React, { Component } from "react";
import "./index.css";

class JumlahSewa extends Component {
  state = {
    value: 1
  }

  handleminus = () => {
    if(this.state.value > 1 ) {
      this.setState({ 
        value: this.state.value - 1 
      });
    }
  }

  handleplus = () => {
      this.setState({
        value: this.state.value + 1 
      });
    }
    

  render() {
    return (
        <div className="def-number-input number-input">
          <button className="minus" onClick={this.handleminus}></button>
          <input className="quantity" type="number" value={this.state.value} onChange={()=> console.log('change')}/>
          <button className="plus" onClick={this.handleplus}></button>
        </div>
      );
  }
}

export default JumlahSewa;