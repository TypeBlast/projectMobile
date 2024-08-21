import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

//Import components
import InputEmail from "../components/inputs/inputEmail";
import InputCPF from "../components/inputs/inputCPF";
import InputName from "../components/inputs/inputName";
import InputPhone from "../components/inputs/inputPhone";
import InputKey from "../components/inputs/inputKey";

function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta!</Text>
      <Image
        source={require("../assets/images/imageRegister.png")}
        style={styles.image}
      />
      <Text style={styles.textWelcome}>
        Cadastre-se e desfrute de nossos serviços!
      </Text>
      <InputEmail />
      <InputCPF />
      <InputName />
      <InputPhone />
      <InputKey />
      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.textButtonRegister}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
  },
  backButton: {
    width: "4%",
    height: "3%",
    marginTop: "25%",
    marginLeft: "-85%",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginTop: "25%",
  },
  image: {
    width: "50%",
    height: "23%",
  },
  textWelcome: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    width: "40%",
    textAlign: "center",
    marginTop: "3%",
  },
  buttonRegister: {
    width: "80%",
    height: "7%",
    backgroundColor: '#EB389A',
    borderRadius: 10,
    marginTop: "10%"
},
textButtonRegister: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: "#FFF",
    textAlign: 'center',
    marginTop: "2.5%"
},
});

export default Register;
