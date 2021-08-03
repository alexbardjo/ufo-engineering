export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_SEARCH_CARDS = 'SET_SEARCH_CARDS';


export const setSearchValue = value => (
    {
        type: SET_SEARCH_VALUE,
        payload: value
    }
);

export const setSearchCards = value => (
    {
        type: SET_SEARCH_CARDS,
        payload: value
    }
);



