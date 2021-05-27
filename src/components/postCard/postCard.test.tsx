import React from 'react';
import { screen } from '@testing-library/react';
import { PostCard } from './postCard';
import { renderComponent } from "../../utils/testUtils";

describe('Page Title', () => {
  const postMock = {
    username: 'usernameTest',
    email: "email@server.com",
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto",
    clickHandler: () => {}
  }

  it('should render page title', () => {
    renderComponent(<PostCard username={postMock.username} body={postMock.body} clickHandler={postMock.clickHandler} email={postMock.email} title={postMock.title} />);

    const titleEl = screen.getByText(postMock.title);
    const emailEl = screen.getByText(postMock.email);
    const bodyEl = screen.getByText(postMock.body);

    expect(titleEl).toBeInTheDocument();
    expect(emailEl).toBeInTheDocument();
    expect(bodyEl).toBeInTheDocument();
  })
});
