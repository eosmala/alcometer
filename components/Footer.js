import { View } from 'react-native';
import { Text, withTheme, useTheme } from 'react-native-paper';
import React from 'react';
import styles from "../styles/Style";
import theme from '../styles/Theme';

const Footer = () => {
	const { colors } = useTheme(theme);
	return (
		<View style={[styles.footer, { backgroundColor: colors.accentBackground }]}>
			<Text style={[styles.author, { color: colors.primary }]}>Author: Elina Osmala</Text>
		</View>
	);
}
export default withTheme(Footer)