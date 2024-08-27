import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Feather from '@expo/vector-icons/Feather';

function InputKey({ value, onChangeText }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [isInputFilled, setIsInputFilled] = useState(false);

    const togglePasswordVisibility = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const handleTextChange = (text) => {
        onChangeText(text);
        setIsInputFilled(text.length > 0); // Verifica se o campo tem texto
    };

    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={faKey} color='#D9D9D9' size={20} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="default"
                value={value}
                onChangeText={handleTextChange}
                secureTextEntry={secureTextEntry}
            />
            {isInputFilled && (
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconEye}>
                    <Feather name={secureTextEntry ? "eye-off" : "eye"} size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: "5%",
    },
    input: {
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1.5,
        width: "70%",
        paddingRight: 30, // Espaço extra para o ícone do olho
    },
    icon: {
        marginTop: "2%",
        marginRight: "2%",
    },
    iconEye: {
        position: 'absolute',
        right: 0,
        padding: 10,
    },
});

export default InputKey;
