import React, { useState } from "react";
import { addToCart } from "../redux/cartReducers";
import data from "../data";
import { useDispatch } from "react-redux";

function ProductPage() {
  const [products, setProducts] = useState(data);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <main>
          <section>
            <div className="spacer">
              <div className="container">
                <div className="row mt-5 mb-5 justify-content-center">
                  <div className="col-lg-9">
                    <div className="row shop-listing">
                      {products.map((product, i) => (
                        <div className="col-lg-4" key={product.id}>
                          <div className="card shop-hover border-0">
                            <img
                              src={product.img}
                              alt="wrapkit"
                              className="img-fluid"
                            />
                          </div>
                          <div className="card border-0">
                            <h6>{product.name}</h6>
                            <h5 className="font-medium m-b-30">
                              ${product.price}
                            </h5>
                            <button
                              style={{ margin: 10 }}
                              onClick={() => dispatch(addToCart(product))}
                              className="btn btn-md btn-info"
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProductPage;
