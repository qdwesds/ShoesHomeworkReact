import React, { Component } from "react";

export default class ShoesDetails extends Component {
  render() {
    const { image, name, price, shortDescription } = this.props.detailGiay;
    return (
      <div>
        <h2>Thông tin chi tiết giày</h2>
        <img width={"100%"} src={image} alt="" />
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{shortDescription}</p>
      </div>
    );
  }
}
