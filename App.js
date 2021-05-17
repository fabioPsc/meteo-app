import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Headers';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header title={'Meteo App'} />
      </View>
      );
    }
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });
  