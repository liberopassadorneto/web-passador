import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  // example colors with dark mode
  colors: {
    background: '#121214',
    blueDarker: '#182328',
    green: '#04d361',
    greenLow: '#1c2a24',
    greenDarker: '#0f3924',
    successLow: '#051b0d',
    red: '#ce4a4a',
    redLight: '#eb3223',
    redDarker: '#3d1b23',
    error: '#e83f5b',
    orange: '#ff7a29',
    orangeDarker: '#412c17',
    orangeDarkness: '#593918',
    orangeDarknessPlus: '#2a1f15',
    yellow: '#ffcd1e',
    primary: '#8257e5',
    primaryDarker: '#28203e',
    primaryDarkness: '#1d1929',
    primaryHover: '#9466ff',
    primaryBorder: '#6833e4',
    primaryShape: '#734bd1',
    primaryLight: '#996dff',
    gray: '#e1e1e6',
    text: '#a8a8b3',
    baseText: '#c4c4cc',
    support: '#737380',
    shape: '#202024',
    shapeDark: '#3c3c42',
    shapeHover: '#29292e',
    icons: '#41414d',
    attention: '#fd951f',
    borders: '#323238',
    experts: '#db3a2c',
    react: '#2ac7e3',
    node: '#8cc84b',
    elixir: '#a32ddf',
    reactNative: '#4763ff',
    flutter: '#0389ff',
    doWhile: '#ff068a',
    black: '#09090a',
    white: '#ffffff',
    scrollbar: '#4d4d57',

    // highlight a background color for highlighting text
  },
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text',
      },
    },
  },
});
