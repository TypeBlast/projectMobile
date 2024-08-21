import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

//Import Icons
import { faIdCard } from '@fortawesome/free-solid-svg-icons';


function InputCPF() {


    return(
        <View style={styles.container}>
            <FontAwesomeIcon icon={faIdCard} color='#D9D9D9' size={20} style={styles.icon}/>  
            <TextInput 
            style={styles.input}
            placeholder="CPF"
            keyboardType="numeric"
            />  
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: "5%"
    },
    input: {
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1.5,
        width: "70%",
    },
    icon: {
        marginTop: "2%",
        marginRight: "2%"
    }
})

export default InputCPF;