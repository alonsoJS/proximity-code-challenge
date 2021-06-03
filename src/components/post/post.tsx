import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Post as PostType, Store, User, Comment } from "../../store/types";
import { PostCard } from "../postCard/postCard";
import { loadPostComments } from "../../store/actions/loadPostComments";
import { CommentList } from "../commentList/commentList";
import { Loading } from "../loading/Loading";
import { CommentButton } from "../commentButton/commentButton";
import { CommentDialog } from "../commentDialog/commentDialog";

interface PostWrapperProps {
  postInfo: PostType
}

export const Post: React.FC<PostWrapperProps> = (props) => {
  const dispatch = useDispatch();
  const { postInfo } = props;
  const {
    users: { userList },
    posts: { commentList }
  } = useSelector((store: Store) => store);
  const [ postUser, setPostUser ] = useState<User | undefined>();
  const [ postComments, setPostComments ] = useState<Comment[]>([]);
  const [ showComments, setShowComments ] = useState<boolean>(false);
  const [ showCommentDialog, setShowCommentDialog ] = useState<boolean>(false);
  const hasPosts = () => postComments.length !== 0;

  useEffect(() => {
    const foundUser = userList.find((user: User) => user.id === postInfo.userId) || undefined;
    setPostUser(foundUser)
  }, [postInfo, userList]);

  useEffect(() => {
    const foundPostComments = commentList.filter((comment: Comment) => comment.postId === postInfo.id);
    setPostComments(foundPostComments);
  }, [setPostComments, commentList, postInfo])

  const onCommentLoad = () => {
    if (!postComments || postComments.length === 0) dispatch(loadPostComments(postInfo.id))
  };

  const onToggleShowComments = () => {
    onCommentLoad();
    setShowComments(prevState => !prevState);
  }

  const onToggleCommentDialog = () => {
    setShowCommentDialog(prevState => !prevState)
  }

  return (
    <Fragment>
      <div>
        { postUser && (
          <PostCard
            clickHandler={onToggleShowComments}
            username={postUser.username}
            email={postUser.email}
            title={postInfo.title}
            body={postInfo.body}
          />
        )}
        { showComments && (
          <Fragment>
            { !hasPosts() && <Loading width={80} /> }
            { hasPosts() && (
              <Fragment>
                <CommentList commentList={postComments}/>
                <CommentButton clickHandler={onToggleCommentDialog}/>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
      { showCommentDialog && <CommentDialog postInfo={postInfo} closeHandler={onToggleCommentDialog}/> }
    </Fragment>
  )
}
