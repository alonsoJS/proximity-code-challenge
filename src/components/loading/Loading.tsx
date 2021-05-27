import React from 'react';
import { AnimationSVG, LoadingWrapper } from './styles';

interface LoadingProps {
  width: number;
}

export const Loading: React.FC<LoadingProps> = ({width}) => {
  return (
    <LoadingWrapper width={width}>
      <AnimationSVG
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="15" y="30" width="10" height="40" fill="#00171f">
          <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.6" />
        </rect>
        <rect x="35" y="30" width="10" height="40" fill="#568ea3">
          <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.4" />
        </rect>
        <rect x="55" y="30" width="10" height="40" fill="#568ea3">
          <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.2" />
        </rect>
        <rect x="75" y="30" width="10" height="40" fill="#00171f">
          <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-1" />
        </rect>
      </AnimationSVG>
    </LoadingWrapper>
  )
}
