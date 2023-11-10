/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import strings from './strings';

const App = () => {

  const [phoneNumber, setPhoneNumber] = useState('')
  const validatePhoneNumber = require("phone-validation-sf")

  const handleLogin = () => {
    const validationResult = validatePhoneNumber(phoneNumber)

    if(validationResult.valid){
      Alert.alert('Giriş Başarılı',validationResult.message)
    }else{
      Alert.alert('Hata',validationResult.message)
    }
  }

return(
  <View style={styles.container}>
    <Text style={styles.title}>{strings.welcomeMessage}</Text>
    <Text style={styles.desc}>{strings.descMessage}</Text>
    <TextInput
      style={styles.input}
      placeholder= {strings.inputMessage}
      keyboardType= "numeric"
      maxLength={11}
      value={phoneNumber}
      onChangeText={setPhoneNumber}
    />
    <Pressable style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>{strings.buttonText}</Text>
    </Pressable>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 8,
  },
  desc: {
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 12,
    color: '#555',
  },
  input: {
    height: 40,
    width: 260,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    alignItems: 'center',
    width: 260,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#4caf50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
  }
})

export default App











