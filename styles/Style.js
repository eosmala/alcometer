import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,   
    paddingTop: 20,
},
header: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
},
headline: {
    textAlign: 'center',
},
form: {
    alignSelf: 'stretch',
},
field: {
    marginBottom: 16,
},
subheading: {
    marginBottom: 16,
    fontWeight: 'bold',
},
output: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
},
footer: {
    alignSelf: 'stretch',
    padding: 10,
},
author: {
    fontSize: 16,
    textAlign: 'center',
}
});