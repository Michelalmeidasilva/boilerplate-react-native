import React from 'react';

import {
  render as renderLibrary,
  fireEvent,
  userEvent,
  RenderOptions,
} from '@core/libraries';

import {ThemeProvider} from '@providers/';
import {ReactNode} from 'react';

const Providers = ({children}: {children: ReactNode}) => (
  <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
);

const render = (ui: React.ReactElement, config?: RenderOptions) =>
  renderLibrary(ui, {wrapper: Providers, ...config});

export {render, fireEvent, userEvent};
