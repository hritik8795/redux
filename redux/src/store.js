import { createStore } from "redux";

import rootReduer from "./reducers/index";

const store = createStore(rootReduer)

export default store;