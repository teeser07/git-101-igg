import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default function App() {
  const [ input, setInput ] = useState('')
  const [color, setColor] = useState('red')
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://xn--12c4bmfplte6kc5ei9v.net/wp-content/uploads/2016/05/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B9%82%E0%B8%94%E0%B9%80%E0%B8%A3%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99-1.jpg' }} 
        style={styles.logo}
      />
      <Text style={styles.title}>Hello World</Text>
      <TextInput 
        value={input} 
        onChangeText={(text) => {setInput(text) }}
        placeholder="Input here" 
        style={styles.input}
      />
      <Text style={{fontSize:18, marginTop:20, color: color }}>{input}</Text>
      <View style={styles.ButtonLayout}>
        <Button title="Red" color="red" onPress={() => {setColor('red')}} />
        <Button title="Blue" color="blue" onPress={() => {setColor('blur')}} />
        <Button title="Green" color="green" onPress={() => {setColor('green')}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    width:150,
    height:150,
  },
  title: {
    fontSize:24,
    fontWeight: 'bold',
    marginTop: 28,
  },
  input: {
    height:40,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderEndWidth: 1,
    width: '100%',
    marginTop:20,
  },
  ButtonLayout: {
    flexDirection: 'row',
    marginTop:20,
  }
});
