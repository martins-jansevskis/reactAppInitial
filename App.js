import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
      <View>
        <Text>Hello, world!</Text>
        <Text>Hello, name!</Text>
        <Text>Hello, name!</Text>
        <Text>Hello, name!</Text>
        <Image style={{width: 50, height: 50, backgroundColor:"#000"}} source={{
            uri: 'https://images.app.goo.gl/zkE27QFuyARtLuaA9',
          }}/>
      <Image style={{width: 50, height: 50, backgroundColor:"#009"}} source={{
              uri: 'https://images.app.goo.gl/zkE27QFuyARtLuaA9',
            }}/>
        <Image style={{width: 50, height: 50, backgroundColor:"#070"}} source={{
                uri: 'https://images.app.goo.gl/zkE27QFuyARtLuaA9',
              }}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
