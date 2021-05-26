import styled from 'styled-components';

export const PageTitleWrapper = styled.div`
  padding: 40px 0;
`;

export const PageTitleAccent = styled.div`
  width: 40px;
  height: 4px;
  background: ${props => props.theme.colors.sandyBrown}
`;

export const PageTitleText = styled.h1`
  font-weight: ${props => props.theme.fontStyles.bold};
  color: ${props => props.theme.colors.richBlack};
  margin: 0;
  padding: 0;
`;
