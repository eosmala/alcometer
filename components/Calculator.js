import { View } from 'react-native';
import { withTheme, TextInput, Button, Provider as PaperProvider, useTheme, Text, Subheading } from 'react-native-paper';
import React, { useState } from "react";
import DropDown from 'react-native-paper-dropdown';
import Radiobutton from './Radiobutton';
import styles from "../styles/Style";
import theme from '../styles/Theme';

const Calculator = () => {
	const [weight, setWeight] = useState(0);
	const [amount, setAmount] = useState(1);
	const [time, setTime] = useState(1);
	const [gender, setGender] = useState('male');
	const [alclevel, setAlclevel] = useState(0);
	const [showDropDownAmount, setShowDropDownAmount] = useState(false);
	const [showDropDownTime, setShowDropDownTime] = useState(false);

	const { colors } = useTheme(theme);

	const amounts = Array(10)
		.fill('')
		.map((_, i) => ({ label: `${i + 1} bottles`, value: `${i + 1}` }))

	const hours = Array(12)
		.fill('')
		.map((_, i) => ({ label: `${i + 1} hours`, value: `${i + 1}` }))

	const genders = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' }
	]

	function calculate() {
		const formattedWeight = weight.replace(',', '.');
		let result = 0;
		let litres = amount * 0.33;
		let grams = litres * 8 * 4.5;
		let burn = formattedWeight / 10;
		let gramsLeft = grams - (burn * time);

		if (formattedWeight <= 0 || isNaN(formattedWeight) === true) {
			alert('Type in weight as a number!');
			return;
		}

		if (gender === 'male') {
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
	function getResultColor(i) {
		if (i === 0) {
			return "green";
		} else if (i < 0.5) {
			return "orange"
		} else {
			return "red";
		}
	}
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TextInput
					label='Weight'
					mode='outlined'
					style={styles.field}
					keyboardType='numeric'
					maxLength={3}
					value={String(weight)}
					onChangeText={setWeight}
				/>
				<View style={styles.field}>
					<DropDown
						style={{ marginBottom: 40 }}
						label={'Bottles'}
						mode={'outlined'}
						value={amount}
						setValue={setAmount}
						list={amounts}
						visible={showDropDownAmount}
						showDropDown={() => setShowDropDownAmount(true)}
						onDismiss={() => setShowDropDownAmount(false)}
					/>
				</View>
				<View style={styles.field}>
					<DropDown
						label={'Time'}
						mode={'outlined'}
						value={time}
						setValue={setTime}
						list={hours}
						visible={showDropDownTime}
						showDropDown={() => setShowDropDownTime(true)}
						onDismiss={() => setShowDropDownTime(false)}
					/>
				</View>
				<Subheading style={[styles.subheading, { color: colors.accent }]}>Gender</Subheading>
				<Radiobutton
					options={genders}
					onPress={(value) => { setGender(value) }}
					defaultValue={'male'}
					style={{ fontWeight: 'bold' }}
				/>
				<Text style={[styles.output, { color: getResultColor(alclevel) }]}>{alclevel.toFixed(2)}</Text>

				<Button mode='contained' onPress={calculate}>Calculate</Button>
			</View>
		</View>
	);
}

export default withTheme(Calculator)