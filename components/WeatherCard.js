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
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        /* resolve for android */
        elevation: 12,
        borderRadius: 8,
    },
    title: {
        color: 'blue',
        fontSize: 22,
    }
})

export default WeatherCard;
