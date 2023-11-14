/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react18-router";
import history from "../utils/history";
import uiReducer from "./modules/ui";
import ecommerce from "../containers/SampleApps/Ecommerce/reducers/ecommerceReducer";

/**
 * Branching reducers to use one reducer for many components
 */

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ui: uiReducer,
    ecommerce,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
