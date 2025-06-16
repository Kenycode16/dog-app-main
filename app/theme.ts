import { MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';

const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8b8155',
    secondary: '#355833',
    surfaceVariant: '#faf8f4',
  },
};

export default theme;
