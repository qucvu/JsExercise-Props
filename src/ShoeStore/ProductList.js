import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { products, onBuy, onSelect } = this.props;
    return (
      <div className="row">
        {products.map((proudct) => {
          return (
            <ProductItem
              key={proudct.id}
              product={proudct}
              onBuy={onBuy}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    );
  }
}
