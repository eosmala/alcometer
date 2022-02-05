import React, { useState } from "react";
import { Provider as PaperProvider, Button, TextInput, useTheme, Text, Headline } from 'react-native-paper';
import theme from './styles/Theme';
import DropDown from 'react-native-paper-dropdown';
import Constants from 'expo-constants';
import RadioForm from 'react-native-simple-radio-button';
import { StyleSheet, View } from 'react-native';


export default function App() {
  const [weight, setWeight] = useState(0);
  const [amount, setAmount] = useState(1);
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male');
  const [alclevel, setAlclevel] = useState(0);
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);

  const {colors} = useTheme(theme);

  const amounts = Array(10)
    .fill('')
    .map((_,i) => ({ label: `${i + 1} bottles`,value: `${i + 1}`}))

  const hours = Array(10)
    .fill('')
    .map((_,i) => ({ label: `${i + 1} hours`,value: `${i + 1}`}))

  const genders = [
    {label: 'Male', value: 'male' },
    {label: 'Female', value: 'female' }
  ]

  function calculate() {
    const formattedWeight = weight.replace(',','.');
    let result = 0;
    let litres = amount * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = formattedWeight / 10;
    let gramsLeft = grams - (burn * time);

    if (formattedWeight.length === 0 || isNaN(formattedWeight) === true) {
      alert('Type in weight as a number!');
      return;
    }

    if  (gender === 'male') {
      result = gramsLeft / (formattedWeight * 0.7)
    } else {
      result = gramsLeft / (formattedWeight * 0.6)
    }

    if (result < 0) {
      setAlclevel(0);
    } else {
      setAlclevel(result);
    }
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <View style={styles.form}>
        <Headline style={[styles.headline, {color: colors.primary}]}>Alcometer</Headline>
        <TextInput 
            label='Weight'
            mode='outlined'
            style={styles.field}
            keyboardType='numeric'
            value={weight}
            onChangeText={setWeight}
          />
          <DropDown 
            label={'Bottles'}
            mode={'outlined'}
            value={amount}
            setValue={setAmount}
            list={amounts}
            visible={showDropDown1}
            showDropDown={() => setShowDropDown1(true)}
            onDismiss={() => setShowDropDown1(false)}
          />
          <DropDown 
              label={'Time'}
              mode={'outlined'}
              value={time}
              setValue={setTime}
              list={hours}
              visible={showDropDown2}
              showDropDown={() => setShowDropDown2(true)}
              onDismiss={() => setShowDropDown2(false)}
            />
          <Text>Gender</Text>
          <RadioForm 
            style={styles.radio}
            buttonSize = {10}
            radio_props={genders}
            initial={0}
            onPress={(value) => {setGender(value)}}
          ></RadioForm>
          <Text>{alclevel.toFixed(2)}</Text>
          <Button mode='contained' onPress={calculate}>Calculate</Button>
        </View>
    </View>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
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
