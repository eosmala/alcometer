import React, { useState } from "react";
import RadioForm from 'react-native-simple-radio-button';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [amount, setAmount] = useState(1);
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male');
  const [alclevel, setAlclevel] = useState(0);

  const amounts=Array();
  amounts.push({label: '1 bottle', value: 1});
  amounts.push({label: '2 bottles', value: 2});
  amounts.push({label: '3 bottles', value: 3});
  amounts.push({label: '4 bottles', value: 4});
  amounts.push({label: '5 bottles', value: 5});

  const hours = [
    {label: '1 hour', value: 1},
    {label: '2 hour', value: 2},
    {label: '3 hour', value: 3},
    {label: '4 hour', value: 4},
    {label: '5 hour', value: 5}
  ]

  const genders = [
    {label: 'Male', value: 'male' },
    {label: 'Female', value: 'female' }
  ]

  function calculate() {
    let result = 0;
    if  (gender === 'male') {
      result = 1 * weight;
    } else {
      result = 2 * weight;
    }
    setAlclevel(result);
  }

  return (
    <View style={styles.container}>
    <View style={styles.field}>
      <Text>Weight</Text>
      <TextInput 
        style={styles.input}
        onChangeText={text => setWeight(text)}
        placeholder="in kilograms" 
        keyboardType="numeric"></TextInput>
    </View>
    <View style={styles.field}>
      <Text>Bottles</Text>
      <Picker style={styles.input}
          onValueChange={(itemValue) => setAmount(itemValue)}
          selectedValue={amount}
        >
          {amounts.map((amount,index) => (
            <Picker.Item key={index} label={amount.label} value={amount.value} />
          ))}
      </Picker>
    </View>
    <View style={styles.field}>
      <Text>Time</Text>
      <Picker style={styles.input}
          onValueChange={(itemValue) => setTime(itemValue)}
          selectedValue={time}
        >
          {hours.map((time,index) => (
            <Picker.Item key={index} label={time.label} value={time.value} />
          ))}
      </Picker>
    </View>
    <View style={styles.field}>
      <Text>Gender</Text>
      <RadioForm 
        style={styles.radio}
        buttonSize = {10}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
      ></RadioForm>
      <Text>{alclevel.toFixed(0)}</Text>
    </View>
    <Button onPress={calculate} title="Calculate"></Button>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 10,
  },
  radio: {
    marginTop: 10,
    marginBottom: 10,
  }
});
