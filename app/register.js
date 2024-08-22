import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from '../services/api'; // Importe o Axios configurado

// Import components
import InputEmail from "../components/inputs/inputEmail";
import InputCPF from "../components/inputs/inputCPF";
import InputName from "../components/inputs/inputName";
import InputPhone from "../components/inputs/inputPhone";
import InputKey from "../components/inputs/inputKey";

function Register() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const user = { email, cpf, name, phone, password };
      const response = await axios.postUser(user); // Certifique-se de que o endpoint está correto

      if (response.status === 201) {
        Alert.alert("Sucesso", response.data.message);
        navigation.navigate('index'); 
        // Opcional: Navegue para outra página após o registro
      } else {
        Alert.alert("Erro", response.data.message);
      }
    } catch (error) {
      Alert.alert("Erro", error.response.data.message);
    }
  };

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
      <InputEmail value={email} onChangeText={setEmail} />
      <InputCPF value={cpf} onChangeText={setCpf} />
      <InputName value={name} onChangeText={setName} />
      <InputPhone value={phone} onChangeText={setPhone} />
      <InputKey value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
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
    marginTop: "10%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonRegister: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: "#FFF",
    textAlign: 'center',
  },
});

export default Register;
