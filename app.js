import store from "./store.js"; 
import { increase,decrease,reset } from "./actions/counterActions.js"

console.log("initial value:",store.getState());

store.subscribe(()=>{
    console.log("current value:",store.getState())  
})

store.dispatch(increase(10))

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(reset())