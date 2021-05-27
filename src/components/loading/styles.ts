import styled from 'styled-components';

export const AnimationSVG = styled.svg`
  margin: auto; 
  display: block; 
  shape-rendering: auto;
`;

interface LoadingWrapperProps {
  width: number;
}

export const LoadingWrapper = styled.div<LoadingWrapperProps>`
  width: ${props => props.width}%;
`;

