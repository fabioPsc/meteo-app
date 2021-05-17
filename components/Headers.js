import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header=(props)=>{
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
        
}

const styles=StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: 'blue',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 22,
    }
})

export default Header

