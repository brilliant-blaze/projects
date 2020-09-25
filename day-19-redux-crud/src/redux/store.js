import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(() => {}, applyMiddleware(logger, thunk));

export default store;