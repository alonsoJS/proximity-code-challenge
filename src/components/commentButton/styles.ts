import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.theme.colors.blueMunsell};
  border: 0;
  border-radius: ${props => props.theme.radius.standard};
  padding: ${props => props.theme.spacing.standard};
  margin-top: ${props => props.theme.spacing.standard};
  width: 47%;
  margin-left: 87px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontStyles.bold};
  cursor: pointer;
`
