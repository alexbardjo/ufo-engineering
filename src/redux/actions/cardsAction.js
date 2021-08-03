import axios from 'axios';

export const SET_CARDS = 'SET_CARDS';
export const SET_CARDS_FAILURE = 'SET_CARDS_FAILURE';
export const CHANGE_TAGS = 'CHANGE_TAGS';
export const REMOVE_TAG = 'REMOVE_TAG';
export const SET_TAG = 'SET_TAG';
export const SET_TAG_WORD = 'SET_TAG_WORD';




export const setCards = cards => (
    {
        type: SET_CARDS,
        payload: cards
    }
);

export const setCardsFailure = error => (
    {
        type: SET_CARDS_FAILURE,
        payload: {
            error
        }
    }
);

export const changeTags = cardId => (
    {
        type: CHANGE_TAGS,
        payload: cardId
    }
);

export const removeTag = tag => (
    {
        type: REMOVE_TAG,
        payload: tag
    }
);

export const setTag = tag => (
    {
        type: SET_TAG,
        payload: tag
    }
);

export const setTagWord = word => (
    {
        type: SET_TAG_WORD,
        payload: word
    }
);



export const fetchCards = () => (dispatch) => {
    axios.get(' https://pixabay.com/api/?key=22716292-2d6490b45ed48342f4cafb0a7&q=cats&image_type=all&per_page=100').then(({data}) => {
        dispatch(setCards(data.hits));
    }).catch((error) => {
        dispatch(setCardsFailure(error.message));
    })
};




