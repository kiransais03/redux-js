import store from "./redux/store.js"; 
import { increase,decrease,reset } from "./redux/actions/counterActions.js";

console.log("initial value:",store.getState());

store.subscribe(()=>{
    console.log("current value:",store.getState())  
})

store.dispatch(increase(10))

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(reset())