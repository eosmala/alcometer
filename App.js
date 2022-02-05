import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './styles/Theme';
import { ScrollView } from 'react-native';
import Calculator from "./components/Calculator";


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        <Calculator />
      </ScrollView>
    </PaperProvider>
  );
}