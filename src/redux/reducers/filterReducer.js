import {SET_SORT_BY} from "../actions/filterAction";

const initialState = {
    sortType: 'more likes',
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortType: action.payload,
            };

        default:
            return state;
    }
};

export default filtersReducer;