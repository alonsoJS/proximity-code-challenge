import React from 'react';
import { PageTitleWrapper, PageTitleAccent, PageTitleText } from './styles'

interface PageTitleProps {
  text: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({text}) => {
  return (
    <PageTitleWrapper>
      <PageTitleText>
        {text}
      </PageTitleText>
      <PageTitleAccent />
    </PageTitleWrapper>
  )
}
