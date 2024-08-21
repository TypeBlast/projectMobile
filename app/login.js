import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';

//Import components
import InputEmail from '../components/inputs/inputEmail';
import InputKey from '../components/inputs/inputKey';

function Login() {

    const navigation = useNavigation();

    function navigateToRegister(){
        navigation.navigate('register')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entre em sua conta!</Text>
            <Image source={require("../assets/images/imageLogin.png")} style={styles.image} />
            <Text style={styles.textWelcome}>Bem vindo novamente, sentimos sua falta!</Text>
            <InputEmail />
            <InputKey />
            <TouchableOpacity>
                <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmGoogle}>
                <FontAwesomeIcon icon={faGoogle} size={16} color='#F25CAE' style={styles.googleIcon} />
                <Text style={styles.textConfirmGoogle}>Continuar com o Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.textButtonLogin}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToRegister} style={{
                marginTop: "5%"
            }}>
                <Text style={styles.textNewAccount}>Criar nova conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFF",
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        marginTop: '25%',
    },
    image: {
        width: "50%",
        height: "23%",
    },
    textWelcome: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        width: "40%",
        textAlign: 'center',
        marginTop: "3%",
    },
    esqueceuSenha: {
        fontFamily: 'Poppins-Regular',
        fontSize: 8,
        color: '#E01483',
        textDecorationLine: 'underline',
        marginTop: "5%",
        marginLeft: "55%",
    },
    confirmGoogle: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        width: "70%",
        height: "6%",
        marginTop: "5%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    googleIcon: {
        marginRight: 10,
    },
    textConfirmGoogle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    buttonLogin: {
        width: "80%",
        height: "7%",
        backgroundColor: '#EB389A',
        borderRadius: 10,
        marginTop: "10%"
    },
    textButtonLogin: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: "#FFF",
        textAlign: 'center',
        marginTop: "2.5%"
    },
    textNewAccount: {
        color: "#E01483",
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        textAlign: 'center'
    }
});

export default Login;
