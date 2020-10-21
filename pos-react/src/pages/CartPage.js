import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {
  GET_TOTALS,
  decreaseAmount,
  increaseAmount,
  removeItem,
  clearCart,
} from "../redux/cartReducers";
import { createOrder } from "../redux/orderReducers";

function CartPage() {
  const carts = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleModal = () => setShow(true);

  const handleCheckout = () => {
    const newCarts = {
      id: Math.floor(Math.random() * 10000),
      cart: carts,
      cartTotal: total,
    };
    dispatch(createOrder([newCarts]));
    setShow(false);
  };

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [carts, dispatch]);

  return (
    <div>
      <main>
        <section>
          <div className="spacer">
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-9">
                  <div className="row shop-listing">
                    <table className="table shop-table">
                      <thead>
                        <tr>
                          <th className="b-0">Image</th>
                          <th className="b-0">Name</th>
                          <th className="b-0">Price</th>
                          <th className="b-0">Quantity</th>
                          <th className="b-0">Total Price</th>
                        </tr>
                      </thead>
                      {carts.map((item, i) => (
                        <thead key={item.id}>
                          <tr>
                            <td>
                              <img src={item.img} height="50" width="60"></img>
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                              <button
                                onClick={() =>
                                  dispatch(increaseAmount(item.id))
                                }
                                className="btn btn-primary btn-sm"
                              >
                                +
                              </button>
                              <span style={{ margin: 5 }}>{item.quantity}</span>
                              <button
                                onClick={() => {
                                  if (item.quantity === 1) {
                                    dispatch(removeItem(item.id));
                                  } else {
                                    dispatch(decreaseAmount(item.id));
                                  }
                                }}
                                className="btn btn-primary btn-sm"
                              >
                                -
                              </button>
                            </td>
                            <td className="text-center">
                              <h5 className="font-medium m-b-30">
                                ${item.quantity * item.price}
                              </h5>
                            </td>
                          </tr>
                        </thead>
                      ))}
                      {carts.length === 0 ? (
                        <thead>
                          <tr>
                            <th>Cart is Empty</th>
                          </tr>
                        </thead>
                      ) : (
                        <thead>
                          <tr>
                            <td colSpan="1" align="left">
                              <button
                                className="btn btn-danger"
                                onClick={() => dispatch(clearCart())}
                              >
                                Empty cart
                              </button>
                            </td>
                            <td colSpan="1" align="left">
                              <Button variant="primary" onClick={handleModal}>
                                Check Out
                              </Button>
                            </td>
                            <td colSpan="3" align="right">
                              Subtotal : ${total}
                            </td>
                          </tr>
                        </thead>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="spacer">
            <div className="container">
              <div className="row">
                <table className="table shop-table">
                  <thead>
                    <tr>
                      <th className="b-0">Image</th>
                      <th className="b-0">Name</th>
                      <th className="b-0">Price</th>
                      <th className="b-0">Quantity</th>
                      <th className="b-0">Total Price</th>
                    </tr>
                  </thead>

                  {carts.map((item, i) => (
                    <thead key={item.id}>
                      <tr>
                        <td>
                          <img src={item.img} height="50" width="60"></img>
                        </td>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>
                          <span style={{ margin: 5 }}>{item.quantity}</span>
                        </td>
                        <td className="text-center">
                          <h5 className="font-medium m-b-30">
                            ${item.quantity * item.price}
                          </h5>
                        </td>
                      </tr>
                    </thead>
                  ))}
                  <thead>
                    <tr>
                      <td colSpan="5" align="right">
                        Subtotal : ${total}
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCheckout}>
            Check Out
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartPage;
