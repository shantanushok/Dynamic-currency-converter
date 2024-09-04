import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Termsandcondition = () => {

  return (
    
    <View style={styles.container}>
      <View style={styles.inputContainer}>
     <ScrollView>
      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.subTitle}>1.Use Restrictions: Users may be prohibited from using the service for illegal activities or in violation of any laws or regulations.</Text>
      <Text style={styles.subTitle}>2.Privacy Policy: Information on how user data is collected, stored, and used, including any third-party sharing practices.</Text>
      <Text style={styles.subTitle}>3.User Responsibilities: Users may be required to ensure the accuracy of input data (such as amounts to be converted) and to comply with the service's terms and applicable laws.</Text>
      <Text style={styles.subTitle}>4.Termination of Service: Conditions under which the service provider may terminate or suspend access to the currency converter, such as misuse or violation of terms.</Text>
      <Text style={styles.subTitle}>5.Updates and Changes: The provider's right to update or change the terms of service, including notification procedures for such changes</Text>
      </ScrollView>
      </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F0ED',
    justifyContent: 'center',
    backgroundColor:'#FF5733'
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginBottom:500,
    textAlign:'center',
    marginBottom:10,
    marginTop:20
  },
  subTitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    margin:10,
    justifyContent:'center'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    width: 320,
    height: 600,
    borderRadius: 45,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    padding: 20,
    borderWidth:7

  }
});

export default Termsandcondition;