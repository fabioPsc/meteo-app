import React from 'react';
import {StyleSheet, View, Text, Modal, Button} from 'react-native';

const AddCityModal=(props)=>{
    return (
        <Modal visible={props.visible} animationType={'slide'}>
        <View style={{ flex:1, marginTop: 20}}>
            <Text>Sono un Modal, forse</Text>
            <Button title={'Chiudi Modal'} onPress={props.closeModal} />
        </View>
        
        </Modal>
        )
        
    }
    
    const styles=StyleSheet.create({
        
    })
    
    export default AddCityModal;


