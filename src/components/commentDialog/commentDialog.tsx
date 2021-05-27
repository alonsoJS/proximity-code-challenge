import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from "../../hooks/usePortal";
import { Comment, Post } from "../../store/types";
import { v4 as uuid } from 'uuid';
import {
  Dialog,
  DialogCard,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogInputGroup,
  DialogInput,
  DialogTextarea,
  DialogConfirmButton,
  DialogCancelButton,
  DialogXButton
} from "./styles";
import { useDispatch } from "react-redux";
import { addNewPostComment } from "../../store/actions/addNewPostComment";

interface CommentDialogProps {
  postInfo: Post;
  closeHandler: () => void;
}

export const CommentDialog: React.FC<CommentDialogProps> = (props) => {
  const {
    postInfo,
    closeHandler
  } = props;
  const dispatch = useDispatch();
  const portalTarget = usePortal('comment-dialog');
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ commentBody, setCommentBody ] = useState<string>('');
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  useEffect(() => {
    document.body.classList.toggle('lockScroll');
    return () => { document.body.classList.toggle('lockScroll') }
  }, [])

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newComment: Comment = {
      name,
      email,
      body: commentBody,
      postId: postInfo.id,
      id: uuid()
    }
    dispatch(addNewPostComment(newComment));
    closeHandler();
  }

  return ReactDOM.createPortal((
    <Dialog scrollTop={scrollTop} >
      <DialogCard>
        <form onSubmit={submitHandler}>
          <DialogHeader>
            <DialogTitle>
              Write your comment
            </DialogTitle>
            <DialogXButton onClick={closeHandler}>X</DialogXButton>
          </DialogHeader>
          <DialogBody>
            <DialogInputGroup>
              <DialogInput
                type="text"
                placeholder="Name"
                required
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              />
              <DialogInput
                type="email"
                placeholder="Email"
                required
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </DialogInputGroup>
            <DialogTextarea
              required
              placeholder="Write your comment here..."
              onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setCommentBody(e.target.value)}
            />
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton onClick={closeHandler}>Cancel</DialogCancelButton>
            <DialogConfirmButton type="submit">Save comment</DialogConfirmButton>
          </DialogFooter>
        </form>
      </DialogCard>
    </Dialog>
  ), portalTarget)
}
