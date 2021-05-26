import React from 'react';
import {
  PostCardWrapper,
  PostCardUserImage,
  PostCardUserInfo,
  PostCardUsername,
  PostCardEmail,
  PostCardTitle,
  PostCardBody
} from './styles';

interface PostCardProps {
  username: string;
  email: string;
  title: string;
  body: string;
}

export const PostCard: React.FC<PostCardProps> = (props) => {
  const {
    username,
    email,
    title,
    body
  } = props;

  return (
    <PostCardWrapper>
      <PostCardUserInfo>
        <PostCardUserImage />
        <PostCardUsername>{username} {'> '}</PostCardUsername>
        <PostCardEmail>{email}</PostCardEmail>
      </PostCardUserInfo>
      <PostCardTitle>{title}</PostCardTitle>
      <PostCardBody>{body}</PostCardBody>
    </PostCardWrapper>
  )
}
