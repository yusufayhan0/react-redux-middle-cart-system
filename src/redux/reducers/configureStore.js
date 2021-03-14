import {applyMiddleware, createStore} from "redux"
import rootReducer from "./indexReducer"
import thunk from "redux-thunk"


export default ()=>createStore(rootReducer,applyMiddleware(thunk))


