import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';

const Login = ({ route, navigation }) => {
  const [lusername, setUsername] = useState('');
  const [lpassword, setPassword] = useState('');
  const susername = route.params?.username || 'Shantanu'; 
  const spassword = route.params?.password || route.params?.newpassword||'Set'; 

  const handleLogin = () => {
    console.log('username:', lusername);
    console.log('password:', lpassword);
    if (lusername === susername && lpassword === spassword) {
      navigation.navigate('Screen4');
    } else {
      Alert.alert("Invalid credentials", "The username or password you entered is incorrect.");
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.converter}>
        <Image 
          source={require('../component/Loginpic.jpg')}
          style={styles.image}
        />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subTitle}>Enter your credentials to Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={lusername}
          onChangeText={setUsername}
          placeholder="👤 Username"
          placeholderTextColor="black"
          style={styles.input}
        />
        <TextInput
          value={lpassword}
          onChangeText={setPassword}
          placeholder="🔐 Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('Screen3', { spassword })}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
          <Text style={styles.signupButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    padding: 20,
  },
  converter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    width: 320,
    height: 650,
    borderRadius: 45,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    padding: 20,
    borderWidth:7
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor:'white'
  },
  loginButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'purple',
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    marginRight: 5,
    color: 'black',
  },
  signupButton: {
    color: 'purple',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: undefined,
    resizeMode: 'contain',
    marginBottom: -20,
    borderRadius:300,
    aspectRatio:1
  },
});

export default Login;
