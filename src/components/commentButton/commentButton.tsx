import React from 'react';
import { Button } from './styles';

interface CommentButtonProps {
  clickHandler: () => void;
}

export const CommentButton: React.FC<CommentButtonProps> = ({clickHandler}) => {
  return (
    <Button onClick={clickHandler}>Write a comment &gt;</Button>
  )
}
