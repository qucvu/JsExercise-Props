import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import ProductCart from "./ProductCart";
import ProductModal from "./ProductModal";
export default class ShoeStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
      carts: [],
    };
  }

  handleSelectProduct = (product) => {
    const selectedProduct = { ...product };
    this.setState({ selectedProduct });
  };

  handleBuyProduct = (product) => {
    const index = this.state.carts.findIndex((item) => item.id === product.id);
    if (index === -1) {
      alert("Thêm thành công");
      this.setState((state) => ({
        carts: [...state.carts, { ...product, quanlity: 1 }],
      }));
    } else {
      const carts = [...this.state.carts];
      carts[index].quanlity += 1;
      this.setState({ carts });
    }
  };

  handleDelectProductFromCart = (productId) => {
    console.log(productId);
    const carts = this.state.carts.filter((item) => item.id !== productId);
    this.setState({ carts });
  };

  handleAdjustProductFromCart = (productId, mode) => {
    console.log(productId, mode);
    const carts = this.state.carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quanlity: item.quanlity + mode };
      }
      return item;
    });
    this.setState({ carts });
  };
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">Shoes Shop</h1>

        <div className="container">
          <div className="d-flex justify-content-end mb-2">
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#carts-modal"
            >
              Giỏ hàng
            </button>
          </div>
          <ProductList
            products={data}
            onBuy={this.handleBuyProduct}
            onSelect={this.handleSelectProduct}
          />
          <ProductCart
            carts={this.state.carts}
            onDelete={this.handleDelectProductFromCart}
            onAdjust={this.handleAdjustProductFromCart}
          />
          <ProductModal product={this.state.selectedProduct} />
        </div>
      </div>
    );
  }
}
