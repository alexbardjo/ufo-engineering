import React from "react";

import Card from "./Card";

function Cards({cards, onClickSearchInput, onChangePerson, cardId, onClickTags, onCloseTags, onClickRemove, onChangeTagValue, onChangeTagWord, tagWord}) {


    const sortRef = React.useRef();

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            onClickTags(null);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div ref={sortRef} className="cards">
            {
                cards.map(card =>
                    <Card
                        tagWord={tagWord}
                        onChangeTagWord={onChangeTagWord}
                        onChangeTagValue={onChangeTagValue}
                        onClickRemove={onClickRemove}
                        onCloseTags={onCloseTags}
                        onChangePerson={onChangePerson}
                        key={card.id + card.user_id}
                        card={card}
                        onClickSearchInput={onClickSearchInput}
                        onClickTags={onClickTags}
                        cardId={cardId}
                    />)
            }
        </div>
    )
}

export default Cards;