import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import ThemeWrapper from "./ThemeWrapper";
import { CheckoutPage, Ecommerce, ProductPage } from "../pageListAsync";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App(props) {
  const { history } = props;
  return (
    <ThemeWrapper>
      <Router history={history}>
        <Switch>
          <Route path="/product-detail" component={ProductPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/ecommerce" component={Ecommerce} />
        </Switch>
      </Router>
    </ThemeWrapper>
  );
}

export default App;
