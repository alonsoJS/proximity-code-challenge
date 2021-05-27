import React from 'react';
import { Comment } from "../../store/types";
import {
  CommentCardWrapper,
  CommentCardProfilePicture,
  CommentCardInfoContainer,
  CommentCardBody,
  CommentCardEmail,
  CommentCardName,
  CommentCardAccent
} from "./styles";

interface CommentCardProps {
  commentInfo: Comment
}

export const CommentCard: React.FC<CommentCardProps> = ({commentInfo}) => {
  return (
    <CommentCardWrapper>
      <CommentCardProfilePicture />
      <CommentCardInfoContainer>
        <CommentCardAccent />
        <CommentCardName>{commentInfo.name}</CommentCardName>
        <CommentCardEmail>{commentInfo.email}</CommentCardEmail>
        <CommentCardBody>{commentInfo.body}</CommentCardBody>
      </CommentCardInfoContainer>
    </CommentCardWrapper>
  )
}
