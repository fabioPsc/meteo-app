import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList} from 'react-native';
import Header from './components/Headers';
import WeatherCard from './components/WeatherCard';
import AddCityModal from './components/AddCityModal'; 

export default class App extends React.Component {
  state={
    cities: ['Roma', 'Milano', 'Brescia', 'Palermo', 'Bergamo', 'Bologna', 'Cremona', 'Mantova'],
    visible: false,
  }
  openModal=()=>{
    this.setState({
      visible: true,
    })
  }
  closeModal=()=>{
    this.setState({
      visible: false,
    })
  }
  render() {
    const cities=this.state.cities.map((city, index)=>(
      <WeatherCard title={city} />
      ))
      return (
        <View style={styles.container}>
          <AddCityModal visible={this.state.visible} closeModal={this.closeModal} />
          <Header title={'Meteo App'} />
          <ScrollView contentContainerStyle={styles.cardContainer}>
            {cities}
            <Button title={'Aggiungi'} onPress={this.openModal} />
          </ScrollView>
        
        </View>
        );
      }
      
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      cardContainer: {
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
      }
    });
    
    
    