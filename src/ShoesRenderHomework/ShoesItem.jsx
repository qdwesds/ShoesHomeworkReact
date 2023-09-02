import React, { Component } from "react";

export default class ShoesItem extends Component {
  render() {
    const { image, name, price } = this.props.giay;
    return (
      <>
        <img width={"100%"} src={image} alt="" />
        <h3>{name}</h3>
        <p>{price}</p>
        <button
          onClick={() => {
            this.props.clickXemGiay(this.props.giay);
          }}
          className="btn btn-dark"
        >
          Thông tin chi tiết
        </button>
      </>
    );
  }
}
