import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Headers';
import WeatherCard from './components/WeatherCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header title={'Meteo App'} />
      <WeatherCard title={'Roma'} />
      </View>
      );
    }
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });
  

