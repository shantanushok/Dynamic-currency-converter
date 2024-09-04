import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Sign = ({ route, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [copassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (route.params?.newpassword) {
      setPassword(route.params.newpassword);
      setConfirmPassword(route.params.newpassword);
    }
  }, [route.params?.newpassword]);

  const handleSignup = () => {
    console.log('username:', username);
    console.log('password:', password);
    if (password === copassword) {
      console.warn("Password set successfully");
      navigation.navigate('Screen2', { username, password });
    } else {
      console.warn("Passwords do not match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.converter}>
        <Image 
          source={require('../component/Signpic.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subTitle}>Create your account</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="👤 Username"
            placeholderTextColor="black"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.input}
          />
          <TextInput
            placeholder="🔐 Set password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="black"
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            value={copassword}
            onChangeText={setConfirmPassword}
            placeholder="🔐 Confirm Password"
            placeholderTextColor="black"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    padding: '5%',
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: '5%',
    fontFamily: 'Times New Roman',
  },
  inputContainer: {
    marginBottom: '5%',
  },
  input: {
    padding: '3%',
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    marginBottom: '5%',
    borderRadius: 15,
    alignContent: 'center',
    backgroundColor: 'white',
    width: '100',
  },
  loginButton: {
    backgroundColor: 'purple',
    padding: '4%',
    borderRadius: 15,
    marginTop: '5%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  converter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    width: '90%',
    height: 'auto',
    borderRadius: 45,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    padding: '5%',
    borderWidth: 7,
  },
  image: {
    width: '70%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: '5%',
    borderRadius: 150,
  },
});

export default Sign;
