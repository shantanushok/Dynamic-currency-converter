import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calc = ({ navigation }) => {
  const [display, setDisplay] = useState('');

  const Keypad = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (e) {
        setDisplay('Error');
      }
      return;
    }

    if (value === 'C') {
      setDisplay('');
      return;
    }

    setDisplay(display + value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.display}>{display}</Text>
        <View style={styles.row}>
          <Button value="1" onPress={() => Keypad('1')} />
          <Button value="2" onPress={() => Keypad('2')} />
          <Button value="3" onPress={() => Keypad('3')} />
          <Button value="+" onPress={() => Keypad('+')} style={styles.operatorButton} />
        </View>
        <View style={styles.row}>
          <Button value="4" onPress={() => Keypad('4')} />
          <Button value="5" onPress={() => Keypad('5')} />
          <Button value="6" onPress={() => Keypad('6')} />
          <Button value="-" onPress={() => Keypad('-')} style={styles.operatorButton} />
        </View>
        <View style={styles.row}>
          <Button value="7" onPress={() => Keypad('7')} />
          <Button value="8" onPress={() => Keypad('8')} />
          <Button value="9" onPress={() => Keypad('9')} />
          <Button value="*" onPress={() => Keypad('*')} style={styles.operatorButton} />
        </View>
        <View style={styles.row}>
          <Button value="C" onPress={() => Keypad('C')} style={styles.clearButton} />
          <Button value="0" onPress={() => Keypad('0')} />
          <Button value="=" onPress={() => Keypad('=')} />
          <Button value="/" onPress={() => Keypad('/')} style={styles.operatorButton} />
        </View>
      </View>
    </View>
  );
};

const Button = ({ value, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonText}>{value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733',
    padding: '5%',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    width: '90%',
    borderRadius: 45,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    borderWidth: 4,
    borderColor: 'black',
    padding: '5%',
  },
  display: {
    color: '#000',
    fontSize: 40,
    marginTop: '10%',
    marginBottom: '10%',
    paddingHorizontal: '5%',
    textAlign: 'right',
    width: '100%',
    backgroundColor: 'white',
    padding: '5%',
    borderRadius: 25,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    borderWidth: 2,
    borderColor: '#000',
    fontFamily: 'Times New Roman',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    margin: '2%',
    backgroundColor: '#5f9ea0',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  clearButton: {
    backgroundColor: '#ffa500',
  },
  operatorButton: {
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Times New Roman',
  },
});

export default Calc;
