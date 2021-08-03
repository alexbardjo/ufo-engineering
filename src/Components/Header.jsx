import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import SortPopup from "./SortPopup";
import {setStatus} from "../redux/actions/filterAction";
import {setSearchValue} from "../redux/actions/searchAction";


const statusArr = ['more likes', 'more comments', 'less likes', 'less comments'];


function Header({isShown, onChangeShown, debouncedGetResponse, cards}) {

    const dispatch = useDispatch();

    const {sortType} = useSelector(({filterReducer}) => filterReducer);
    const {searchValue} = useSelector(({searchReducer}) => searchReducer);


    const setStatusType = (sortType) => {
        dispatch(setStatus(sortType));
    };

    const onChangeSearchInput = (event) => {
        dispatch(setSearchValue(event.target.value));
        const tag = event.target.value;
        cards = tag ? cards :'';
        debouncedGetResponse({tag,  cards});
    };

    const onClearInput = () => {
        dispatch(setSearchValue(''));
        debouncedGetResponse('');
    };

    return (
        <div className="header">
            <div className="header__top">
                <h1 className="header__title">Gallery of cats</h1>
            </div>
            <div className="header__bottom">
                {
                    isShown ? <Link to="/">
                            <button onClick={() => onChangeShown(!isShown)} className="homePageBtn">back to home</button>
                        </Link> :
                        <div className="searchBlock">
                            <div className="searchBlock__right">
                                <input
                                    onChange={onChangeSearchInput}
                                    value={searchValue}
                                    className="searchBlock__input"
                                    placeholder="Search..."/>
                                {
                                    searchValue &&
                                    <img onClick={onClearInput}
                                         className="clear"
                                         src="images/btn-remove.svg" alt="clear"/>
                                }
                            </div>
                            <SortPopup
                                onClickSortType={setStatusType}
                                activeSortType={sortType}
                                items={statusArr}/>
                        </div>
                }
            </div>

        </div>
    );
}

export default Header;
