import {SET_PERSON, NOT_SHOWN} from "../actions/personAction";


let initialState = {
    isShown: false,
    person: [],
};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON:
            return {
                ...state,
                person: action.payload,
                isShown: true,
            };
            case NOT_SHOWN:
            return {
                ...state,
                isShown: action.payload,
            };

        default:
            return state;
    }
};


export default characterReducer;