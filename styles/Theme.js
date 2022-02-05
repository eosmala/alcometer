import { configureFonts, DefaultTheme } from 'react-native-paper';
import customFonts from "./Fonts"

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(customFonts),
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary: '#212227',
        accent:'#678D58',
        primaryBackground: '#f5f5DC',
        accentBackground: '#c4e065',
    }
  };
  
  export default theme;