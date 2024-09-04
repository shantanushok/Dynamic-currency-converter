import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const Resetpassword = ({ route, navigation }) => {
  const { spassword } = route.params;
  const [oldpassword, setOldpassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [username, setUsername] = useState('');

  const Reset = () => {
    console.log('Old password:', oldpassword);
    console.log('New password:', newpassword);
    console.log('Username:', username);

    if (oldpassword === spassword) {
      if (oldpassword !== newpassword) {
        console.warn("Password changed successfully");
        navigation.navigate('Screen2', { username, newpassword });
      } else {
        Alert.alert("Error", "New password cannot be the same as the old password");
      }
    } else {
      Alert.alert("Error", "Old password is incorrect");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.converter}>
        <Image 
          source={require('../component/Forgotpic.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Password Recovery</Text>
        <Text style={styles.subTitle}>Forgot your password?</Text>
        <Text style={styles.subsubTitle}>You can easily create a new password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="🙍‍♂️ Username"
            placeholderTextColor="black"
            style={styles.input}
          />
          <TextInput
            value={oldpassword}
            onChangeText={setOldpassword}
            placeholder="🔒 Old Password"
            placeholderTextColor="black"
            style={styles.input}
            secureTextEntry
          />
          <TextInput
            value={newpassword}
            onChangeText={setNewPassword}
            placeholder="🔐 New Password"
            placeholderTextColor="black"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.ResetButton} onPress={Reset}>
          <Text style={styles.ResetButtonText}>Reset</Text>
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
    fontFamily: 'Times New Roman',
    marginTop: '5%',
  },
  subsubTitle: {
    fontSize: 16,
    color: 'black',
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
    marginTop: '5%',
    borderRadius: 15,
    backgroundColor: 'white',
    width: '100',
  },
  ResetButton: {
    backgroundColor: 'purple',
    padding: '4%',
    borderRadius: 15,
    marginTop: '5%',
  },
  ResetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
  },
  image: {
    width: '70%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: '5%',
    borderRadius: 150,
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
});

export default Resetpassword;
