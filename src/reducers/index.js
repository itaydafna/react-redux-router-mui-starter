import { combineReducers } from "redux";

const dummyReducer = (state={},action)=>state;


const rootReducer = combineReducers({
    dummyReducer
});

export default rootReducer;
