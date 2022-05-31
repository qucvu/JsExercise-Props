import React, { Component } from "react";

export default class ProductCart extends Component {
  render() {
    const { carts, onAdjust, onDelete } = this.props;
    let total = carts.reduce((total, item) => {
      return total + item.quanlity * item.price;
    }, 0);
    return (
      <div>
        <div
          className="modal fade"
          id="carts-modal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>
                            <img
                              src={item.image}
                              alt={item.name}
                              width="50px"
                              height="50px"
                            />
                          </td>
                          <td> {item.name}</td>
                          <td className="w-25 m-auto">
                            <button
                              className="btn btn-success"
                              onClick={() => onAdjust(item.id, -1)}
                              disabled={item.quanlity === 1}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quanlity}</span>
                            <button
                              className="btn btn-success"
                              onClick={() => onAdjust(item.id, 1)}
                            >
                              +
                            </button>
                          </td>
                          <td>{item.price}</td>
                          <td>{item.price * item.quanlity}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => onDelete(item.id)}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}

                    <tr>
                      <td colSpan={5}>
                        <b>Tổng tiền</b>
                      </td>
                      <td>
                        <b>{total}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      </div>
    );
  }
}
