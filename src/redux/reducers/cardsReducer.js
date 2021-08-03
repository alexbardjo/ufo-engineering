import {CHANGE_TAGS, SET_CARDS, SET_CARDS_FAILURE, REMOVE_TAG, SET_TAG, SET_TAG_WORD} from "../actions/cardsAction";


let initialState = {
    isLoaded: false,
    cards: [],
    error: null,
    cardId: null,
    tagWord: ''
};

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                cards: action.payload,
                isLoaded: true,
            };

        case SET_CARDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };

        case CHANGE_TAGS:
            return {
                ...state,
                cardId: action.payload
            };

        case REMOVE_TAG:
            const card = state.cards.filter((card) => card.id === action.payload.cardId)[0];
            const fixTags = card.tags.split(',').filter((tag) => tag !== action.payload.tag).join(',');
            const newCard = {...card, tags: fixTags};
            let newCards = state.cards.map((card) => {
                if (card.id === action.payload.cardId) {
                    return newCard;
                } else {
                    return card;
                }
            });
            return {
                ...state,
                cards: newCards
            };

        case SET_TAG:
            const setTagCard = state.cards.filter((card) => card.id === action.payload)[0];
            const newTag = state.tagWord;
            const tagsIncrease = `${setTagCard.tags}, ${newTag}`;
            const cardWithTag = {...setTagCard, tags: tagsIncrease};
            const currentCards = state.cards.map((card) => {
                if (card.id === action.payload) {
                    return cardWithTag;
                } else {
                    return card;
                }
            });

            return {
                ...state,
                cards: currentCards
            };

        case SET_TAG_WORD:
            return {
                ...state,
                tagWord: action.payload
            };

        default:
            return state;
    }
};


export default cardsReducer;