import { View } from 'react-native';
import { withTheme, Headline, TextInput, Button, Provider as PaperProvider,useTheme, Text } from 'react-native-paper';
import React, { useState } from "react";
import DropDown from 'react-native-paper-dropdown';
import Radiobutton from './Radiobutton';
import styles from "../styles/Style";
import theme from '../styles/Theme';

const Calculator = () => {
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
  
    const hours = Array(12)
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
            <Radiobutton 
                options={genders} 
                onPress={(value) => {setGender(value)}}
                defaultValue={'male'}
                />
            <Text>{alclevel.toFixed(2)}</Text>
            <Button mode='contained' onPress={calculate}>Calculate</Button>
          </View>
      </View>
    );
}

export default withTheme(Calculator)