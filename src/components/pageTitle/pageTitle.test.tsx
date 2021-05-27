import React from 'react';
import { screen } from '@testing-library/react';
import { PageTitle } from './pageTitle';
import { renderComponent } from "../../utils/testUtils";

describe('Page Title', () => {
  const mockTitle = 'Test Title'

  it('should render page title', () => {
    renderComponent(<PageTitle text={mockTitle} />);

    const titleEl = screen.getByText(mockTitle);

    expect(titleEl).toBeInTheDocument();
  })
});
