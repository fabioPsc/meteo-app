import React from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';

const AddCityModal=(props)=>{
    return (
        <Modal visible={props.visible}>
        <View>
            <Text>Sono un Modal, forse</Text>
        </View>
        
        </Modal>
        )
        
    }
    
    const styles=StyleSheet.create({
        
    })
    
    export default AddCityModal;


