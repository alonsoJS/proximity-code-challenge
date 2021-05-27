import React from 'react';
import { screen } from '@testing-library/react';
import { CommentList } from './commentList';
import { renderComponent } from "../../utils/testUtils";

describe('Comment List', () => {
  const commentListMock = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasreiciendis et nam sapiente accusantium"
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam atvoluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et"
    },
    {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      body: "quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione"
    },
  ]

  it('should render comment card list properly', async () => {
    renderComponent(<CommentList commentList={commentListMock} />);

    const nameElement1 = await screen.getByText(commentListMock[0].name);
    const nameElement2 = await screen.getByText(commentListMock[1].name);
    const nameElement3 = await screen.getByText(commentListMock[2].name);
    const emailElement1 = await screen.getByText(commentListMock[0].email);
    const emailElement2 = await screen.getByText(commentListMock[1].email);
    const emailElement3 = await screen.getByText(commentListMock[2].email);
    const bodyElement1 = await screen.getByText(commentListMock[0].body);
    const bodyElement2 = await screen.getByText(commentListMock[1].body);
    const bodyElement3 = await screen.getByText(commentListMock[2].body);

    expect(nameElement1).toBeInTheDocument();
    expect(nameElement2).toBeInTheDocument();
    expect(nameElement3).toBeInTheDocument();
    expect(emailElement1).toBeInTheDocument();
    expect(emailElement2).toBeInTheDocument();
    expect(emailElement3).toBeInTheDocument();
    expect(bodyElement1).toBeInTheDocument();
    expect(bodyElement2).toBeInTheDocument();
    expect(bodyElement3).toBeInTheDocument();
  })

});
