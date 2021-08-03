import React, {useCallback} from 'react';
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import './scss/App.scss';
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import PersonalPage from "./Components/PersonalPage";
import {setSearchCards} from "./redux/actions/searchAction";
import {setPerson, ShownOff} from "./redux/actions/personAction";
import {changeTags, fetchCards, removeTag, setTag, setTagWord} from "./redux/actions/cardsAction";
import Loader from "./Components/Loader";


function App() {

    const dispatch = useDispatch();
    const {cards, isLoaded, cardId, tagWord} = useSelector(({cardsReducer}) => cardsReducer);
    const {sortType} = useSelector(({filterReducer}) => filterReducer);
    const {searchCards} = useSelector(({searchReducer}) => searchReducer);
    const {isShown, person} = useSelector(({personReducer}) => personReducer);


    React.useEffect(() => {
        dispatch(fetchCards());
    }, []);


    const onChangePerson = (card) => {
        dispatch(setPerson(card))
    };

    const onChangeShown = (bool) => {
        dispatch(ShownOff(bool))
    };
    const onClickTags = (id) => {
        dispatch(changeTags(id))
    };

    const onCloseTags = () => {
        if (cardId) {
            dispatch(changeTags(null))
        }
    };

    const onClickRemove = (tag) => {
        dispatch(removeTag(tag));
    };

    const onChangeTagWord = (event) => {
        dispatch(setTagWord(event.target.value));
    };

    const onChangeTagValue = (value) => {
        dispatch(setTag(value));
        dispatch(setTagWord(''))
    };

    const data = searchCards ? searchCards  : cards;

    if (sortType === 'less likes') {
        data.sort(function (a, b) {
            if (a.likes > b.likes) {
                return 1;
            }
            if (a.likes < b.likes) {
                return -1;
            }
            return 0;
        });
    }
    if (sortType === 'more likes') {
        data.sort(function (a, b) {
            if (a.likes < b.likes) {
                return 1;
            }
            if (a.likes > b.likes) {
                return -1;
            }
            return 0;
        });
    }

    if (sortType === 'less comments') {
        data.sort(function (a, b) {
            if (a.comments > b.comments) {
                return 1;
            }
            if (a.comments < b.comments) {
                return -1;
            }
            return 0;
        });
    }

    if (sortType === 'more comments') {
        data.sort(function (a, b) {
            if (a.comments < b.comments) {
                return 1;
            }
            if (a.comments > b.comments) {
                return -1;
            }
            return 0;
        });
    }
    const debounce = (fn, ms) => {
        let timeout;
        return function () {
            const fnCall = () => {
                fn.apply(this, arguments)
            };
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms)
        }
    };

    const debouncedGetResponse = useCallback(
        debounce(value => dispatch(setSearchCards(value)), 300),
        []
    );


    return (
        <div className="wrapper">
            <Header isShown={isShown} onChangeShown={onChangeShown} debouncedGetResponse={debouncedGetResponse} cards={cards}/>
           <div className="content">
               {isLoaded ? <Route exact path="/" render={() => <Cards
                   tagWord={tagWord}
                   onChangeTagWord={onChangeTagWord}
                   onChangeTagValue={onChangeTagValue}
                   cards={data}
                   onClickRemove={onClickRemove}
                   onCloseTags={onCloseTags}
                   onChangePerson={onChangePerson}
                   onClickTags={onClickTags}
                   cardId={cardId}/>}/> : <Loader/>}
           </div>
            {<Route exact path="/person" render={() => <PersonalPage person={person}/>}/>}

        </div>
    );
}


export default App;
