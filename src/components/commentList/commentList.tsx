import React from 'react';
import { CommentWrapper } from "./styles";
import { Comment } from "../../store/types";
import { CommentCard } from "../commentCard/commentCard";

interface CommentsWrapperProps {
  commentList: Comment[];
}

export const CommentList: React.FC<CommentsWrapperProps> = ({commentList}) => {
  return (
    <CommentWrapper>
      { commentList.map((comment: Comment) => <CommentCard commentInfo={comment} key={comment.id} />)}
    </CommentWrapper>
  )
}
