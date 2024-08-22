import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

//Import components


function OnboardingItem({item}) {

    const navigation = useNavigation();

    function navigateToLogin(){
        navigation.navigate('login')
    }

    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.buttonSkip} onPress={navigateToLogin}>
            <Text style={styles.skip} >Skip</Text>
            </TouchableOpacity>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        justifyContent: 'center'
    },
    buttonSkip: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        top: 100,
        right: 50,
        position: 'absolute'
    },
    skip:{
        fontFamily: 'Poppins-Regular',
        color: "#A8A8A8",
        fontSize: 14
    },
    image: {
        width: '70%',
        height: '38%', 
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontFamily: 'IntegralCF-Regular',
        fontSize: 24,
        color: "#EB389A",
        marginLeft: "7%",
        paddingVertical: '2%'
    },
    description: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        width: 200,
        marginLeft: "7%",
        marginTop: "1%"
    }
})

export default OnboardingItem;