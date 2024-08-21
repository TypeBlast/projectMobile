import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

//Import Icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function InputEmail() {


    return(
        <View style={styles.container}>
            <FontAwesomeIcon icon={faEnvelope} color='#D9D9D9' size={20} style={styles.icon}/>  
            <TextInput 
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            />  
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: "8%"
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

export default InputEmail;