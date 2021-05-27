import React from 'react';
import {render, RenderOptions, RenderResult} from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import {store} from "../store/store";
import {Provider} from "react-redux";
import GlobalStyle from "../theme/globalStyles";

interface CustomRenderConfig extends RenderOptions {
  [key: string]: any;
}

export function renderComponent(children: React.ReactNode, renderConfig: CustomRenderConfig = {}): RenderResult {
  const rendered = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>,
    renderConfig
  )

  return {
    ...rendered,
  }
}
