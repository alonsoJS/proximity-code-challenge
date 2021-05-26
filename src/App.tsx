import React, { useEffect } from 'react';
import { PageTitle } from "./components/pageTitle/pageTitle";
import { PostCard } from "./components/postCard/postCard";
import { MainFrame } from "./components/mainFrame/mainFrame";
import { useDispatch, useSelector } from "react-redux";
import {Post, Store, User} from "./store/types";
import { fetchPostList } from "./store/actions/fetchPostList";
import {fetchUserList} from "./store/actions/fetchUsers";

function App() {
  const dispatch = useDispatch();
  const {
    posts: {
      postList
    },
    users: {
      userList
    }
   } = useSelector((state: Store) => ({...state}));

  useEffect(() => {
    dispatch(fetchPostList())
    dispatch(fetchUserList())
  }, [dispatch])

  return (
    <MainFrame>
      <PageTitle text="FEED" />
      {postList && postList.length !== 0 && postList.map((post: Post) => {
        const postUser = userList.find((user: User) => user.id === post.userId)
        return (
          <PostCard
            username={postUser?.username || ''}
            email={postUser?.email || ''}
            title={post.title}
            body={post.body}
            key={post.id}
          />
        )
      })}
    </MainFrame>
  );
}

export default App;
