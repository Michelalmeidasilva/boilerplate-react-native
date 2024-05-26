import React from 'react';

import {ThemeProvider, useTheme} from '../ThemeProvider';
import {render} from '@core/libraries';

describe('ThemeProvider Component', () => {
  test('should render children with light theme by default', () => {
    const ChildComponent = () => {
      const {theme, colors} = useTheme();

      return (
        <div>
          <span data-testid="theme">{theme}</span>
          <div data-testid="primary-color" style={{color: colors.primary}}>
            Primary Color
          </div>
        </div>
      );
    };

    render(
      <ThemeProvider defaultTheme={'light'}>
        <ChildComponent />
      </ThemeProvider>,
    );
  });
});
