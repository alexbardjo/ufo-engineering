import React from 'react';
import {Link} from "react-router-dom";


function Card({card, onChangePerson, onClickTags, cardId, onCloseTags, onClickRemove, onChangeTagValue, tagWord, onChangeTagWord}) {


    const {previewURL, tags, comments, likes, id} = card;

    const stopProp = (event) => {
        event.stopPropagation()
    };


    const listItems = tags.split(',').map((tag, index) =>
        <li className="info__list-block" key={tag + index}>
            <div
                className={`info__list-item ${tag ? '' : 'unvisible'}`}>{tag}</div>
            <img onClick={() => onClickRemove({tag, cardId})}
                 className={`${tag ? '' : 'hideBtn'} ${cardId === id ? 'remove' : ''}`}
                 src="images/btn-remove.svg" alt="clear"/>
        </li>
    );

    return (
        <div className="card">
            <Link to="/person">
                <img onClick={() => onChangePerson(card)} src={previewURL} alt="cat" className="card__img"/>
            </Link>
            <div onClick={onCloseTags} className="card__info info">
                <ul className="info__statistic">
                    <li><span>Likes:</span> <strong>{likes}</strong></li>
                    <li><span>Comments:</span> <strong>{comments}</strong></li>
                </ul>
                <div onClick={(event) => stopProp(event)} onDoubleClick={() => onClickTags(id)}
                     className={`card__tags ${cardId === id ? 'change' : ''}`}>
                    <ul className="info__list">
                        {listItems}
                    </ul>
                    <div className={`info__newTag ${cardId === id ? 'visible' : ''}`}>
                        <input
                            onChange={(event) => onChangeTagWord(event)}
                            value={tagWord}
                            className="info__input" type="text"
                            placeholder="New tags..."/>
                        <img onClick={() => tagWord && onChangeTagValue(cardId)} className="info__input-img" src="images/send.svg"
                             alt="send"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card;