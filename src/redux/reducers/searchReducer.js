import {SET_SEARCH_VALUE, SET_SEARCH_CARDS} from "../actions/searchAction";

const initialState = {
    searchValue: '',
    searchCards: null
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        case SET_SEARCH_CARDS:
            const data = action.payload.cards ?  action.payload.cards.filter((card) => card.tags.toLowerCase().indexOf(action.payload.tag.toLowerCase()) !== -1) : null;
            return {
                ...state,
                searchCards: data,
            };

        default:
            return state;
    }
};

export default filtersReducer;