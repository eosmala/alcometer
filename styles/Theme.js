import { configureFonts, DefaultTheme } from 'react-native-paper';
import customFonts from "./Fonts"

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(customFonts),
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary: '#2f8d59',
        accent:'#03DAC6',
        primaryVariant: '#3700B3',
        accentVariant: '#018766',
        primaryBackground: '#f5f5DC',
        accentBackground: '#f9e4b7',
    }
  };
  
  export default theme;