import React, { useEffect } from 'react';
import { Post as PostType, Store } from "./store/types";
import { PageTitle } from "./components/pageTitle/pageTitle";
import { MainFrame } from "./components/mainFrame/mainFrame";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostList } from "./store/actions/fetchPostList";
import { fetchUserList } from "./store/actions/fetchUsers";
import { Post } from "./components/post/post";

function App() {
  const dispatch = useDispatch();
  const { postList } = useSelector((store: Store) => store.posts);

  useEffect(() => {
    dispatch(fetchPostList())
    dispatch(fetchUserList())
  }, [dispatch])

  return (
    <MainFrame>
      <PageTitle text="FEED" />
      { postList.map((post: PostType) => <Post postInfo={post} key={post.id}/>) }
    </MainFrame>
  );
}

export default App;
