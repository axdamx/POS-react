import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Collapse, Card } from "react-bootstrap";

function OrderPage() {
  const order = useSelector((state) => state.orderReducer.order);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <main>
        <section>
          <div className="spacer">
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-9">
                  <div className="row shop-listing">
                    <p> Your Order Details</p>
                  </div>
                  <Card>
                    <Card.Body>
                      {order.map((item, i) => (
                        <div className="mt-4" key={i}>
                          Order Number #{i + 1}
                          <Button
                            style={{ marginLeft: 10 }}
                            variant="primary"
                            onClick={() => setOpen(!open)}
                          >
                            View Details
                          </Button>
                          <Collapse in={open}>
                            <div className="mt-4">
                              {item.map((orderInfo, i) => (
                                <div className="mt-4" key={orderInfo.id}>
                                  <div className="container">
                                    {orderInfo.cart.map((cartItems, i) => (
                                      <div className="mt-4" key={cartItems.id}>
                                        <div className="container">
                                          <p>Name:{cartItems.name}</p>
                                          <p>
                                            Quantity:
                                            {cartItems.quantity}
                                          </p>
                                          <p>Price: ${cartItems.price}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <p>Total Price: ${orderInfo.cartTotal}</p>
                                </div>
                              ))}
                            </div>
                          </Collapse>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OrderPage;
