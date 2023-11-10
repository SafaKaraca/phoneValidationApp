/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const App = () => {

return(
  <View style={styles.container}>
    <Text style={styles.title}>Hoşgeldiniz</Text>
    <TextInput
      style={styles.input}
      placeholder= "Numara"
      keyboardType= "numeric"
    />
    <Button title='Sorgula'></Button>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  }
})

export default App











