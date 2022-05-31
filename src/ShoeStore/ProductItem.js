import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, onBuy, onSelect } = this.props;
    if (!product) {
      return null;
    }
    return (
      <div key={product.id} className="col-sm-4 mb-4">
        <div className="item card px-3">
          <img src={product.image} alt={product.name} className="img-fluid" />
          <h3>{product.name}</h3>
          <span
            style={{
              marginBottom: "10px",
              fontSize: "18px",
            }}
          >
            {product.price}$
          </span>
          <div className="d-flex  ">
            <button
              onClick={() => onBuy(product)}
              className="p-2 btn btn-dark mb-3"
              style={{ backgroundColor: "#000", color: "#fff", width: "35%" }}
            >
              add to carts
              <i className="fa fa-cart-plus ms-2"></i>
            </button>
            <button
              className="btn btn-info p-2 w-50 mb-3"
              data-bs-toggle="modal"
              data-bs-target="#target-item"
              onClick={() => onSelect(product)}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
