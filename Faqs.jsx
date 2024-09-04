import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Faqs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>FAQ's</Text>
          <Text style={styles.subTitle}>1. What is a currency converter app?</Text>
          <Text style={styles.subsubtitle}>
            - A currency converter app is a tool that allows users to quickly convert the value of one currency into another based on current exchange rates.
          </Text>
          <Text style={styles.subTitle}>2. How accurate are the exchange rates provided by the app?</Text>
          <Text style={styles.subsubtitle}>
            - The app provides real-time or near real-time exchange rates sourced from reliable financial institutions. However, exchange rates can fluctuate, so it's advisable to verify rates if making significant financial decisions.
          </Text>
          <Text style={styles.subTitle}>3. Is the app free to use?</Text>
          <Text style={styles.subsubtitle}>
            - Many currency converter apps are free to download and use. However, some may offer premium features or charge for ad-free experiences. Check the app's details for specific pricing information.
          </Text>
          <Text style={styles.subTitle}>4. Does the app require an internet connection to work?</Text>
          <Text style={styles.subsubtitle}>
            - Yes, the app typically requires an internet connection to fetch the latest exchange rates from its sources. Offline functionality may be limited to previously cached rates.
          </Text>
          <Text style={styles.subTitle}>5. Can I convert multiple currencies at once?</Text>
          <Text style={styles.subsubtitle}>
            - Some apps allow you to convert between multiple currencies simultaneously, making it convenient for travelers or those dealing with international transactions.
          </Text>
          <Text style={styles.subTitle}>6. How frequently are exchange rates updated?</Text>
          <Text style={styles.subsubtitle}>
            - Exchange rates are usually updated in real-time or at regular intervals, depending on the app's data source. Users may have the option to manually refresh rates for the latest information.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    padding: '5%',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
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
    marginTop: '10%',
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginBottom: '5%',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    padding: '2%',
  },
  subsubtitle: {
    fontSize: 15,
    color: 'blue',
    fontFamily: 'Times New Roman',
    paddingHorizontal: '2%',
    paddingBottom: '4%',
  },
});

export default Faqs;
