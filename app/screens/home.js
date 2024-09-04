import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { UserContext } from "../UserContext"; // Importe o UserContext

function HomePage() {
  const { user } = useContext(UserContext); // Utilize o UserContext para acessar o usuário logado

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Bem-vindo, {user?.name || "Usuário"}!
      </Text>
      <View style={styles.topHome}>
        <View style={styles.pading}>
          <View style={styles.leftHalf}>
            <Image
              source={require("../../assets/images/imageHome1.png")}
              style={styles.image1}
            />
          </View>
          <View style={styles.rightHalf}>
            <Text style={styles.Pet}>PetExpress</Text>
            <Text style={styles.Texto}>
              Todo para o{"\n"}
              bem-estar do{"\n"}
              seu pet!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Categorias}>
        <Text style={styles.textCategorias}>Categorias</Text>
        {/* Adicionando ScrollView horizontal */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonsContainer}
        >
          <TouchableOpacity style={styles.Alimentacao}>
            <Text style={styles.textAlimentacao}>Alimentação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Beleza}>
            <Text style={styles.textAlimentacao}>Higiene e beleza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Acessorios}>
            <Text style={styles.textAlimentacao}>Acessórios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Saude}>
            <Text style={styles.textAlimentacao}>Saúde</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.Especies}>
        <Text style={styles.textCategorias}>Espécies</Text>
        {/* Adicionando ScrollView horizontal para as espécies */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.speciesContainer}
        >
          <View style={styles.viewDog}>
            <TouchableOpacity style={styles.Cachorro}>
              <Image
                source={require("../../assets/images/dogImage1.png")}
                style={styles.imageDog}
              />
            </TouchableOpacity>
            <Text style={styles.textCachorro}>Cachorro</Text>
          </View>
          <View style={styles.viewCat}>
            <TouchableOpacity style={styles.Gato}>
              <Image
                source={require("../../assets/images/catImage1.png")}
                style={styles.imageDog}
              />
            </TouchableOpacity>
            <Text style={styles.textGato}>Gato</Text>
          </View>
          <View style={styles.viewBird}>
            <TouchableOpacity style={styles.Bird}>
              <Image
                source={require("../../assets/images/dogImage1.png")}
                style={styles.imageDog}
              />
            </TouchableOpacity>
            <Text style={styles.textBird}>Pássaro</Text>
          </View>
          <View style={styles.viewReptil}>
            <TouchableOpacity style={styles.Reptil}>
              <Image
                source={require("../../assets/images/catImage1.png")}
                style={styles.imageDog}
              />
            </TouchableOpacity>
            <Text style={styles.textReptil}>Réptil</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "start",
  },
  topHome: {
    height: 250,
    width: "100%",
    top: "10%",
  },
  pading: {
    backgroundColor: "white",
    height: 160,
    width: "80%",
    alignSelf: "center",
    top: "10%",
    borderRadius: 20,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    flexDirection: "row",
  },
  leftHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
    paddingHorizontal: 10,
  },
  image1: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  Pet: {
    fontSize: 16,
    fontFamily: "MonumentExtentend",
    color: "#000",
  },
  Texto: {
    fontSize: 15,
    color: "#000",
    fontFamily: "Poppins-Regular",
    top: 5,
    textAlign: "start",
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#333",
    top: 80,
    left: 20,
  },
  Categorias: {
    top: "10%",
    height: 100,
  },
  textCategorias: {
    color: "#EB389A",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    left: 35,
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  Alimentacao: {
    backgroundColor: "#CE88F8",
    height: 40,
    width: 125,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Beleza: {
    backgroundColor: "#FF8DBA",
    height: 40,
    width: 125,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Acessorios: {
    backgroundColor: "#85F78D",
    height: 40,
    width: 125,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Saude: {
    backgroundColor: "#FDFF8A",
    height: 40,
    width: 125,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textAlimentacao: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
  },
  Especies: {
    top: "10%",
    height: 180,
  },
  speciesContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  viewDog: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  imageDog: {
    height: 80,
    width: 80,
  },
  Cachorro: {
    height: 100,
    width: 100,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#A63DDC",
    alignItems: "center",
    justifyContent: "center",
  },
  textCachorro: {
    color: "#A63DDC",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  viewCat: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  Gato: {
    height: 100,
    width: 100,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#FF423D",
    alignItems: "center",
    justifyContent: "center",
  },
  textGato: {
    color: "#FF423D",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  viewBird: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  Bird: {
    height: 100,
    width: 100,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#37E843",
    alignItems: "center",
    justifyContent: "center",
  },
  textBird: {
    color: "#37E843",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  viewReptil: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  Reptil: {
    height: 100,
    width: 100,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "#FCFF3D",
    alignItems: "center",
    justifyContent: "center",
  },
  textReptil: {
    color: "#FCFF3D",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
});

export default HomePage;