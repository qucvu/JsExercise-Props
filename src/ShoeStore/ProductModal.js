import React, { Component } from "react";

export default class ProductModal extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    if (!product) return null;
    return (
      <div
        className="modal fade"
        id="target-item"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Chi tiết {product.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    width: 300,
                  }}
                />
              </div>
              <h3>Price: {product.price}$</h3>
              <span>{product.description}</span>
              <p>{product.shortDescription}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
