import { View } from 'react-native';
import { withTheme, useTheme, Headline } from 'react-native-paper';
import React from 'react';
import styles from "../styles/Style";
import theme from '../styles/Theme';

const Header = () => {
const {colors} = useTheme(theme);
  return (
    <View style={[styles.header, {backgroundColor: colors.accentBackground}]}>
        <Headline style={[styles.headline,{color: colors.primary}]}>Alcometer</Headline>
    </View> 
  );
}
export default withTheme(Header)