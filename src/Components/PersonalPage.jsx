import React from 'react';


function PersonalPage({person}) {

    const {comments, downloads, largeImageURL, likes, tags, user, views} = person;


    return (
        <div className="wrap">

            <div className="personal">
               <div> <img className='personal__img' src={largeImageURL} alt="person"/></div>
                <div className="personal__data">
                    <ul className="personal__list">
                        <li className="personal__list-item">
                            comments: {comments}
                        </li>
                        <li className="personal__list-item">
                            downloads: {downloads}
                        </li>
                        <li className="personal__list-item">
                            likes: {likes}
                        </li>
                        <li className="personal__list-item">
                            tags: {tags}
                        </li>
                        <li className="personal__list-item">
                            user: {user}
                        </li>
                        <li className="personal__list-item">
                            views: {views}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonalPage;