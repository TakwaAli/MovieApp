import {applyMiddleware, createStore} from "redux"

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import Reduer from "./reducer";
const store = createStore(Reduer, composeWithDevTools(applyMiddleware(thunk)))


export default store;