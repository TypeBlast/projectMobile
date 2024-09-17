import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa o hook de navegação
import { UserContext } from "../UserContext";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window'); // Pega as dimensões da tela

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation(); // Instancia o hook de navegação

  // Função para fazer logout e redirecionar para a página inicial
  const handleLogout = () => {
    setUser(null); // Limpa o estado do usuário (deslogar)
    navigation.navigate('index'); // Redireciona para a tela 'Home'
  };

  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <TouchableOpacity style={styles.buttomUser}>
          <Image
            source={require("../../assets/images/imageUser.png")}
            style={styles.imageUser}
          />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>
          {user?.name || "Usuário"}
        </Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={height * 0.05} color="#EB1A0E" />
        </TouchableOpacity>
      </View>
      <View style={styles.centerScreen}>
        <View style={styles.BoxUser}>

        </View>
      </View>
      <View style={styles.bottomScreen}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topScreen: {
    flex: 0.6,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: "row",
    paddingHorizontal: width * 0.05, // Responsivo com base na largura da tela
  },
  buttomUser: {
    borderRadius: 50,
    borderColor: "#BFBFBF",
    borderWidth: 2,
    height: height * 0.1, // 10% da altura da tela
    width: height * 0.1,  // 10% da altura da tela (para manter quadrado)
    alignItems: "center",
    justifyContent: "center",
    marginLeft: width * 0.05, // 5% da largura da tela
  },
  imageUser: {
    height: "72%",
    width: "72%",
  },
  welcomeText: {
    fontSize: height * 0.03, // 3% da altura da tela
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginTop: height * 0.04, // 2% da altura da tela
    marginLeft: width * 0.02, // 2% da largura da tela
  },
  logoutButton: {
    marginLeft: 'auto', // Move o botão para o fim da linha
    paddingHorizontal: width * 0.05, // 5% da largura da tela
  },
  centerScreen: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BoxUser:{
    height: height *0.2,
    width: width * 0.8,
    borderRadius: 20,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    marginTop: height * 0.05, // 5% da altura da tela como margem inferior
  },
  bottomScreen: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: height * 0.03, // 3% da altura da tela
    fontFamily: 'Poppins-Bold',
  },
});

export default User;
