import { StyleSheet, View, Text, Pressable } from 'react-native';
import React, {useState} from 'react';

export default function Radiobutton({options, onPress, style, defaultValue}) {
    const [value, setValue] = useState(defaultValue);

    const handlePress = (selected) => {
        setValue(selected)
        onPress(selected)
    }

    return (
        <>
            {options.map((option) => (
                <View key={option.value} style={[styles.buttonContainer, style]}>
                    <Text style={styles.label}>{option.label}</Text>
                    <Pressable style={styles.circle} onPress={() => handlePress(option.value)}>
                        {value === option.value && <View style={styles.checkedCircle}/>}
                    </Pressable>
                </View>
            ))}
        </>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 10,
        // paddingLeft: 20,
        // paddingRight: 20,
    },
    label: {
        marginRight: 10,
        fontSize: 16,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        height: 15,
        width: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    },
  });