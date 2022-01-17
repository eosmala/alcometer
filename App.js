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

  const amounts= [
    {label: '1 bottle', value: 1},
    {label: '2 bottles', value: 2},
    {label: '3 bottles', value: 3},
    {label: '4 bottles', value: 4},
    {label: '5 bottles', value: 5},
    {label: '6 bottles', value: 6}
  ]
  const hours = [
    {label: '1 hour', value: 1},
    {label: '2 hours', value: 2},
    {label: '3 hours', value: 3},
    {label: '4 hours', value: 4},
    {label: '5 hours', value: 5},
    {label: '6 hours', value: 6}
  ]

  const genders = [
    {label: 'Male', value: 'male' },
    {label: 'Female', value: 'female' }
  ]

  function calculate() {
    let result = 0;
    let litres = amount * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let gramsLeft = grams - (burn * time);

    if  (gender === 'male') {
      result = gramsLeft / (weight * 0.7)
    } else {
      result = gramsLeft / (weight * 0.6)
    }

    if (result < 0) {
      setAlclevel(0);
    } else {
      setAlclevel(result);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Alcometer</Text>
      </View>
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
        <Text>{alclevel.toFixed(2)}</Text>
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
