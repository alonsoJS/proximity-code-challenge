import {Store, Post, Comment, User} from "./types";

export const postList: Post[] = [];

export const commentList: Comment[] = [];

export const userList: User[] = [];

export const store: Store = {
  posts: {
    postList,
    commentList
  },
  users: {
    userList
  }
}
