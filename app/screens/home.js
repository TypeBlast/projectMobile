import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
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
          <TouchableOpacity style={styles.Alimentacao}>
            <Text style={styles.textAlimentacao}>Brinquedos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Alimentacao}>
            <Text style={styles.textAlimentacao}>Acessórios</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Alimentacao}>
            <Text style={styles.textAlimentacao}>Higiene</Text>
          </TouchableOpacity>
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
    fontSize: 17,
    fontFamily: "MonumentExtentend",
    color: "#000",
  },
  Texto: {
    fontSize: 17,
    color: "#000",
    fontFamily: "Poppins-Regular",
    top: 5,
    textAlign: "start", // Centraliza o texto na View
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    color: "#333",
    top: 80,
    left: 20,
  },
  Categorias: {
    backgroundColor: "white",
    top: "10%",
    height: 150, // Aumentei a altura para caber os botões
  },
  textCategorias: {
    color:"#EB389A",
    fontFamily:"Poppins-SemiBold",
    fontSize:18,
    left:35,
  },
  buttonsContainer: {
    flexDirection: "row", // Alinha os botões horizontalmente
    paddingHorizontal: 30, // Mantém o espaçamento lateral
    paddingVertical: 10,
  },
  Alimentacao: {
    backgroundColor: "#CE88F8",
    height: 40,
    width: 120,
    borderRadius: 10,
    marginHorizontal: 10, // Espaçamento entre os botões
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAlimentacao: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
  },
});

export default HomePage;
