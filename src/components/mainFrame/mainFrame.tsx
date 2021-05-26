import React from 'react'
import { Main } from './styles'

interface MainFrameProps {
  children?: React.ReactNode
}

export const MainFrame: React.FC<MainFrameProps> = (props) => {
  return (
    <Main>
      {props.children}
    </Main>
  )
}
