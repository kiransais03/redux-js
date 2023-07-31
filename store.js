import { createStore } from "redux"; 
import counterReducer from "./reducer/counterReducer.js";


const store = createStore(counterReducer);

console.log(store)

export default store