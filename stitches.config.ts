import 'inter-ui/inter.css';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import type { TypographicStyleString } from './scripts/src/getStitchesTextStyle';
import { getStitchesTextStyle } from './scripts/src/getStitchesTextStyle';
import { colorPrimitives } from './src/primitives/colorPrimitives';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    lg: '992px',
    md: '768px',
    sm: '576px',
    xl: '1200px',
    xxl: '1440px',
  },
  theme: {
    borderStyles: {
      solid: 'solid',
    },
    borderWidths: {
      thin: '2px',
    },
    colors: colorPrimitives,
    radii: {
      4: '4px',
      16: '16px',
    },
    space: {
      4: '4px',
      8: '8px',
      16: '16px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      96: '96px',
      128: '128px',
    },
  },
  utils: {
    buttonReset: () => ({
      appearance: 'none',
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      margin: 0,
      padding: 0,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    textStyle: (value: TypographicStyleString) => getStitchesTextStyle(value),
  },
});

// Create and call globalCss to add the styles to the global stylesheet
globalCss({
  html: {
    fontFamily: '"Inter", "system-ui"',
    padding: '$12',
  },
})();
