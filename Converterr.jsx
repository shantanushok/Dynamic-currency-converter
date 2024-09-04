import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Convert = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rates, setRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest/USD');
        setRates(response.data.rates);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to fetch exchange rates");
      }
    };

    fetchRates();
  }, []);

  const handleConvert = () => {
    if (!amount) {
      Alert.alert("Error", "Please enter an amount");
      return;
    }
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    if (fromRate && toRate) {
      const converted = ((amount / fromRate) * toRate).toFixed(2);
      setConvertedAmount(converted);
    } else {
      Alert.alert("Error", "Conversion rate not available");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.converter}>
        <Text style={styles.title}>Currency Converter</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Amount"
          placeholderTextColor={'black'}
        />
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>From:</Text>
          <Picker
            selectedValue={fromCurrency}
            style={styles.picker}
            onValueChange={setFromCurrency}
            dropdownIconColor="black"
          >
            {Object.keys(rates).map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>To:</Text>
          <Picker
            selectedValue={toCurrency}
            style={styles.picker}
            onValueChange={setToCurrency}
            dropdownIconColor="black"
          >
            {Object.keys(rates).map((currency) => (
              <Picker.Item key={currency} label={currency} value={currency} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity onPress={handleConvert} style={styles.button}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>
        {convertedAmount && (
          <Text style={styles.result}>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733',
  },
  converter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    width: '90%',
    borderRadius: 45,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    padding: 20,
    borderWidth: 7,
    borderColor: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  input: {
    color: '#000',
    fontSize: 30,
    marginTop: 25,
    marginBottom: 40,
    paddingHorizontal: 30,
    textAlign: 'center',
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    borderWidth: 1,
    borderColor: '#000',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '200',
  },
  label: {
    fontSize: 20,
    marginRight: 10,
    color: '#333',
    width: 50,
  },
  picker: {
    height: 50,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Convert;
