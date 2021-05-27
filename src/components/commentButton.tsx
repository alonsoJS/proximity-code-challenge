import React from 'react';

interface CommentButtonProps {
  clickHandler: () => void;
}

export const CommentButton: React.FC<CommentButtonProps> = ({clickHandler}) => {
  return (
    <button onClick={clickHandler}>Comment</button>
  )
}
