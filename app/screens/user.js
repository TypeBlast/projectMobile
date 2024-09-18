import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importa o hook de navegação
import { UserContext } from "../UserContext";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // Para os ícones de email e telefone
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const { width, height } = Dimensions.get("window"); // Pega as dimensões da tela

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation(); // Instancia o hook de navegação

  // Função para fazer logout e redirecionar para a página inicial
  const handleLogout = () => {
    setUser(null); // Limpa o estado do usuário (deslogar)
    navigation.navigate("index"); // Redireciona para a tela 'Home'
  };

  return (
    <View style={styles.container}>
      {/* Adicionando ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topScreen}>
          <TouchableOpacity style={styles.buttomUser}>
            <Image
              source={require("../../assets/images/imageUser.png")}
              style={styles.imageUser}
            />
          </TouchableOpacity>
          <Text style={styles.welcomeText}>{user?.name || "Usuário"}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <FontAwesome name="sign-out" size={height * 0.05} color="#EB1A0E" />
          </TouchableOpacity>
        </View>

        <View style={styles.centerScreen}>
          <View style={styles.BoxUser}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => alert("Editar informações")}
            >
              <FontAwesome name="pencil" size={24} color="#BFBFBF" />
            </TouchableOpacity>

            {/* Informações do usuário */}
            <View style={styles.infoRow}>
              <FontAwesome name="user" size={24} color="#D9D9D9" />
              <Text style={styles.infoText}>{user?.name || "Usuário"}</Text>
            </View>

            <View style={styles.infoRow}>
              <MaterialIcons name="email" size={24} color="#D9D9D9" />
              <Text style={styles.infoText}>
                {user?.email || "user@example.com"}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <FontAwesome name="id-card" size={24} color="#D9D9D9" />
              <Text style={styles.infoText}>{user?.cpf || "12345678910"}</Text>
            </View>

            <View style={styles.infoRow}>
              <FontAwesome name="phone" size={24} color="#D9D9D9" />
              <Text style={styles.infoText}>
                {user?.phone || "+55 (16) 12345-9876"}
              </Text>
            </View>
          </View>

          <View style={styles.BoxEndereço}>
            <Text style={styles.textEndereços}>Endereços salvos</Text>

            {/* Ícone de lápis para editar endereços */}
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => alert("Editar endereços")}
            >
              <FontAwesome name="pencil" size={24} color="#BFBFBF" />
            </TouchableOpacity>

            {/* Lista de endereços salvos */}
            <View style={styles.infoRow}>
              <FontAwesome name="map-marker" size={24} color="#D9D9D9" />
              <Text style={styles.infoText}>
                Rua das Palmeiras, Jardim Florido, 120
              </Text>
            </View>

            <View style={styles.infoRow}>
              <FontAwesome name="map-marker" size={24} color="#D9D9D9" />
              <Text style={styles.infoText}>
                Avenida dos Ipês, Bairro Alto, 256
              </Text>
            </View>

            <View style={styles.infoRow}>
              <FontAwesome name="map-marker" size={24} color="#D9D9D9" />
              <Text style={styles.infoText}>
                Travessa das Orquídeas, Vila Nova, 78
              </Text>
            </View>
            <TouchableOpacity style={styles.adicionarEndereco}>
              <Text style={styles.adicionarEndText}>Adicionar novo endereço</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomScreen}>
            <TouchableOpacity style={styles.BoxPets}>
            <Text style={styles.adicionarPetsText}>Adicionar Pets</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BoxAgendamentos}>
            <Text style={styles.adicionarPetsText}>Meus agendamentos</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, // Faz com que o conteúdo se estenda ao tamanho da tela
    justifyContent: "space-between", // Garante que as divisões tenham espaço entre si
  },
  topScreen: {
    flex: 0.6,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
  },
  buttomUser: {
    borderRadius: 50,
    borderColor: "#BFBFBF",
    borderWidth: 2,
    height: height * 0.1,
    width: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: width * 0.05,
  },
  imageUser: {
    height: "72%",
    width: "72%",
  },
  welcomeText: {
    fontSize: height * 0.03,
    fontFamily: "Poppins-Bold",
    color: "#333",
    marginTop: height * 0.04,
    marginLeft: width * 0.02,
  },
  logoutButton: {
    marginLeft: "auto",
    paddingHorizontal: width * 0.05,
    bottom:"12%"
  },
  centerScreen: {
    flex: 0.3,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  BoxUser: {
    height: height * 0.16,
    width: width * 0.9,
    borderRadius: 20,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    marginTop: height * 0.05,
    position: "relative",
    backgroundColor: "white",
    padding: height * 0.01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  BoxEndereço:{
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: 20,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    marginTop: height * 0.05,
    position: "relative",
    backgroundColor: "white",
    padding: height * 0.01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomScreen: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius:10
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.002,
  },
  infoText: {
    fontSize: height * 0.015,
    marginLeft: width * 0.03,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  textEndereços: {
    fontFamily: "Poppins-Regular",
    fontSize: height * 0.027,
    left: width * 0.03
  },
  adicionarEndereco:{
    height: "25%",
    width: "90%",
    alignSelf:"center",
    backgroundColor: "#EB389A",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    marginTop: height * 0.01,
  },
  adicionarEndText:{
    fontFamily: "Poppins-Bold",
    color:"white",
    fontSize: height * 0.022,
  }, 
  BoxPets:{
    height: height * 0.07,
    width: width * 0.9,
    borderRadius: 20,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    position: "relative",
    backgroundColor: "white",
    padding: height * 0.01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems:"center",
    justifyContent:"center",

  },
  adicionarPetsText:{
    fontFamily: "Poppins-Regular",
    color:"black",
    fontSize: height * 0.022,
  },
  BoxAgendamentos:{
    height: height * 0.07,
    width: width * 0.9,
    borderRadius: 20,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    marginTop: height * 0.035,
    position: "relative",
    backgroundColor: "white",
    padding: height * 0.01,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems:"center",
    justifyContent:"center",
  },
});

export default User;
