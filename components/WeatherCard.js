import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const WeatherCard=(props)=>{
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
        
}

const styles=StyleSheet.create({
    card: {
        height: 60,
        width: '80%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
    },
    title: {
        color: 'white',
        fontSize: 22,
    }
})

export default WeatherCard;
