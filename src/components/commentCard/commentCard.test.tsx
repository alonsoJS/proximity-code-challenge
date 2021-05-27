import React from 'react';
import { screen } from '@testing-library/react';
import { CommentCard } from './commentCard';
import { renderComponent } from "../../utils/testUtils";

describe('Comment Card', () => {
  const commentInfoMock = {
    postId: 1,
    id: 1,
    name: "Test Name",
    email: "test@emaildomain.com",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate orci eu est ullamcorper dictum. Donec vitae viverra neque, id consequat neque. Praesent at egestas ante."
  }

  it('should render comment card properly', async () => {
    renderComponent(<CommentCard commentInfo={commentInfoMock}/>);

    const nameElement = await screen.getByText(commentInfoMock.name);
    const emailElement = await screen.getByText(commentInfoMock.email);
    const bodyElement = await screen.getByText(commentInfoMock.body);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  })

});
