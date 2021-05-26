import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: 1024px;
  background: ${props => props.theme.colors.white};
  margin: 0 auto;
  box-shadow: ${props => props.theme.shadows.standard};
  min-height: 100vh;
  padding: ${props => props.theme.spacing.xl};
`;
