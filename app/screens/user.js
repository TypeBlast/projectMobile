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

          <View style={styles.BoxUser}>
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
          </View>
        </View>

        <View style={styles.bottomScreen}>
          <Text>Teste do ScrollView</Text>
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
  },
  centerScreen: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  BoxUser: {
    height: height * 0.22,
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
    backgroundColor: "blue",
    justifyContent: "center",
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
    marginVertical: height * 0.009,
  },
  infoText: {
    fontSize: height * 0.02,
    marginLeft: width * 0.03,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  textEndereços: {
    fontFamily: "Poppins-Regular",
    fontSize: height * 0.03,
  },
});

export default User;
