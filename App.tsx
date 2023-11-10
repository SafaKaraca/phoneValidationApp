/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'

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
    <Text style={styles.title}>HOŞGELDİNİZ</Text>
    <Text style={styles.desc}>Lütfen giriş yapmak için telefon numaranızı giriniz</Text>
    <TextInput
      style={styles.input}
      placeholder= "05********* şeklinde giriniz"
      keyboardType= "numeric"
      maxLength={11}
      value={phoneNumber}
      onChangeText={setPhoneNumber}
    />
    <Pressable style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>{'giriş'}</Text>
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











