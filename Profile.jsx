import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveProfile = () => {
    console.log('Profile saved!');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding:100 , backgroundColor:'white'  }}>
      <Text style={{ fontSize: 24, marginBottom: 20 ,color:'black' ,fontWeight:'bold' }}>Profile :</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="  👤 UserName  "
        placeholderTextColor={'black'}
        style={{ marginBottom: 10 , borderColor:'black', borderWidth:2 , borderRadius:20 , color:'black'  }}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="    📧 Email    "
        placeholderTextColor={'black'}
        style={{ marginBottom: 10 ,borderColor:'black', borderWidth:2 ,borderRadius:20 , color:'black'}}
      />
      <TextInput
        value={country}
        onChangeText={setCountry}
        placeholder="  🚩 Country  "
        placeholderTextColor={'black'}
        style={{ marginBottom: 10,borderColor:'black', borderWidth:2,borderRadius:20 , color:'black' }}
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="  📱 Phone Number  "
        placeholderTextColor={'black'}
        style={{ marginBottom: 20,borderColor:'black', borderWidth:2 , borderRadius:20 ,color:'black'}}
      />
      <Button title="Save/Edit Profile" onPress={handleSaveProfile} color={'#7F00FF'} />
    </View>
  );
};

export default ProfileScreen ;