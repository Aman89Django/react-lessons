import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage;
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };
                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             posts={state.posts}
                             newPostText={state.newPostText}
                    />
                )
            }
            }

        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;


