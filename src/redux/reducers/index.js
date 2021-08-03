import {combineReducers} from "redux";
import filterReducer from './filterReducer';
import cardsReducer from './cardsReducer';
import searchReducer from './searchReducer';
import personReducer from './personReducer';



const rootReducer = combineReducers({
    filterReducer,
    cardsReducer,
    searchReducer,
    personReducer
});

export default rootReducer;