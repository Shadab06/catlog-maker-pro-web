/* eslint-disable */

import React from "react";
import Loading from "dan-components/Loading";
import loadable from "../utils/loadable";

export const Ecommerce = loadable(() => import("./SampleApps/Ecommerce"), {
  fallback: <Loading />,
});
export const ProductPage = loadable(
  () => import("./SampleApps/Ecommerce/ProductPage"),
  {
    fallback: <Loading />,
  }
);
export const CheckoutPage = loadable(
  () => import("./SampleApps/Ecommerce/CheckoutPage"),
  {
    fallback: <Loading />,
  }
);
export const NotFound = loadable(() => import("./NotFound/NotFound"), {
  fallback: <Loading />,
});