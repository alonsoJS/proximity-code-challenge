import styled from 'styled-components';

export const CommentCardWrapper = styled.div`
  display: flex;
  margin-left: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

export const CommentCardProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.blueMunsell};
  border-radius: 100%;
  transform: translateY(30%);
`

export const CommentCardInfoContainer = styled.div`
  margin-left: ${props => props.theme.spacing.standard};
  width: 50%;
`;

export const CommentCardName = styled.p`
  font-weight: ${props => props.theme.fontStyles.bold};
  color: ${props => props.theme.colors.richBlack};
  font-size: ${props => props.theme.fontSizes.m};
  margin: 0;
`;

export const CommentCardEmail = styled.p`
  font-weight: ${props => props.theme.fontStyles.light};
  color: ${props => props.theme.colors.terraCotta};   
  font-size: ${props => props.theme.fontSizes.xs};
  margin: 0;
`;

export const CommentCardBody = styled.p`
  font-weight: ${props => props.theme.fontStyles.light};
  color: ${props => props.theme.colors.richBlack};
  font-size: ${props => props.theme.fontSizes.xs};
  margin: ${props => props.theme.spacing.standard} 0 0 0;
`;

export const CommentCardAccent = styled.div`
  width: ${props => props.theme.spacing.standard};
  height: 4px;
  background: ${props => props.theme.colors.sandyBrown};
  margin-bottom: ${props => props.theme.spacing.xs};
`
