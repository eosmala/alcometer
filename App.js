import React from "react";
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import theme from './styles/Theme';
import { ScrollView } from 'react-native';
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function App() {
	const { colors } = useTheme(theme);
	return (
		<PaperProvider theme={theme}>
			<Header />
			<ScrollView style={{ backgroundColor: colors.primaryBackground }}>
				<Calculator />
			</ScrollView>
			<Footer />
		</PaperProvider>
	);
}