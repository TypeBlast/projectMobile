import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../UserContext'; // Importe o UserContext

function HomePage() {
    const { user } = useContext(UserContext); // Utilize o UserContext para acessar o usuário logado

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-vindo, {user?.name || 'Usuário'}!</Text>
            {/* Adicione outros componentes e funcionalidades da HomePage aqui */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    welcomeText: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: '#333',
    },
});

export default HomePage;
