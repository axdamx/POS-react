import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Navbar from "./component/Navbar";
import OrderPage from "./pages/OrderPage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" component={ProductPage} exact />
          <Route path="/cart" component={CartPage} />
          <Route path="/order" component={OrderPage} />
        </Switch>
      </main>
    </Provider>
  );
}

export default App;
