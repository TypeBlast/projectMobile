import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import OnboardingItem from "./onboardingItem";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  // Corrige o erro de digitação e assegura que apenas uma configuração é usada
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slides = [
    {
      id: "1",
      title: "PRODUTOS",
      description:
        "Encontre tudo que seu pet precisa para ser feliz e saudável aqui no nosso app!",
      image: require("../assets/images/imageProducts.png"),
    },
    {
      id: "2",
      title: "SERVIÇOS",
      description:
        "Transforme o visual do seu pet com nossos serviços de banho e tosa, garantindo cuidado e carinho em cada detalhe.",
      image: require("../assets/images/imageServices.png"),
    },
    {
      id: "3",
      title: "CONSULTAS",
      description:
        "Cuide da saúde do seu pet com nossas consultas veterinárias, oferecendo atenção especializada e bem-estar em cada visita.",
      image: require("../assets/images/imageConsults.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollx } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
