import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/Theme';
import { View } from 'react-native';
import styles from "./styles/Style";
import Calculator from "./components/Calculator";


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Calculator />
      
  </PaperProvider>
  );
}