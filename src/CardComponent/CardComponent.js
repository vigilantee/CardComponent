import React, { Component } from "react";
import Card from './Card';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  updateInputValue(val) {
    this.setState({
      count:val
    })
  }
  handleIncreament() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleDecreament() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0
    });
  }
  render() {
    const props = this.props.details;
    const image = props.type == "veg" ? this.props.veg : this.props.nonveg;
    const cardBgColor = props.type == "veg" ? "#008200" : "#BF3304";
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          margin: 20,
          width: 400,
          backgroundColor: "powderblue",
          border: `5px solid ${cardBgColor}`
        }}
      >
        <Card
          props={props}
          logo={image}
          count={this.state.count}
          plus={() => this.handleIncreament()}
          minus={() => this.handleDecreament()}
          updateInputValue={(e)=>this.updateInputValue(e)}
        />
      </div>
    );
  }
}
export default CardComponent;
