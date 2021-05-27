import styled from 'styled-components';

export const PostCardWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.radius.standard};
  box-shadow: ${props => props.theme.shadows.standard};
  padding: ${props => props.theme.spacing.standard};
  margin-top: ${props => props.theme.spacing.xl};
  width: 80%;
  cursor: pointer;
`;

export const PostCardUserImage = styled.div`
  border-radius: 100%;
  background: ${props => props.theme.colors.blueMunsell};
  width: 40px;
  height: 40px;
`;

export const PostCardUserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PostCardUsername = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.lightBlack};
  margin-left: ${props => props.theme.spacing.standard};
`;

export const PostCardEmail = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.lightBlack};
  margin-left: ${props => props.theme.spacing.xs};
`;

export const PostCardTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontStyles.bold};
  color: ${props => props.theme.colors.richBlack};
  margin: 0;
`;

export const PostCardBody = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontStyles.light};
  color: ${props => props.theme.colors.richBlack};
  margin-top: ${props => props.theme.spacing.standard};
`;
