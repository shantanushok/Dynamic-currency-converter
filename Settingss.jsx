import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Set = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.converter}>
        <Image 
          source={require('../component/Settpic.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Settings :</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Terms & Conditions');
            navigation.navigate('Screen5'); 
          }}
        >
          <Text style={styles.buttonText}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('F&Q,s');
            navigation.navigate('Screen6'); 
          }}
        >
          <Text style={styles.buttonText}>F&Q's</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5733',
    padding: '5%',
  },
  title: {
    fontSize: 25,
    marginBottom: '5%',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  button: {
    backgroundColor: '#7F00FF',
    padding: '4%',
    borderRadius: 15,
    marginBottom: '5%',
    alignItems: 'center',
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  converter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    width: '90%',
    height: '80%',
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
    height: '50%',
    resizeMode: 'contain',
    marginBottom: '-5%',
    borderRadius: 300,
  },
});

export default Set;

