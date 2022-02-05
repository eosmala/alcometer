import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: 16,
        marginRight:16,
      },
      headline: {
        marginTop: 16,
        marginBottom: 16,
      },
      form: {
        alignSelf: 'stretch',
      },
      field: {
        marginBottom: 16,
      },
      output: {
        marginTop: 16,
        marginBottom: 24,
        fontSize: 20,
        fontWeight: 'bold',
      },
});