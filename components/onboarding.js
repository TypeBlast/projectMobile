import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

// Import components
import OnboardingItem from './onboardingItem';

const slides = [
    {
        key: 1,
        title: 'PRODUTOS',
        description: 'Encontre tudo que seu pet precisa para ser feliz e saudável aqui no nosso app!',
        image: require("../assets/images/imageProducts.png")
    },
    {
        key: 2,
        title: 'SERVIÇOS',
        description: 'Transforme o visual do seu pet com nossos serviços de banho e tosa, garantindo cuidado e carinho em cada detalhe.',
        image: require("../assets/images/imageServices.png")
    },
    {
        key: 3,
        title: 'CONSULTAS',
        description: 'Cuide da saúde do seu pet com nossas consultas veterinárias, oferecendo atenção especializada e bem-estar em cada visita.',
        image: require("../assets/images/imageConsults.png")
    }
];

function Onboarding() {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextButtonPress = () => {
        if (sliderRef.current) {
            const nextIndex = currentIndex + 1;
            if (nextIndex < slides.length) {
                sliderRef.current.goToSlide(nextIndex, true);
                setCurrentIndex(nextIndex);
            }
        }
    };

    const handleDoneButtonPress = () => {
        console.log("Onboarding concluído");
        // Aqui você pode adicionar lógica para redirecionar o usuário para a tela inicial ou qualquer outra ação
    };

    return (
        <View style={{ flex: 1 }}>
            <AppIntroSlider
                ref={sliderRef}
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                onSlideChange={(index) => setCurrentIndex(index)}
                renderPagination={(activeIndex) => (
                    <View style={styles.paginationContainer}>
                        {slides.map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    styles.dot,
                                    i === activeIndex ? styles.activeDot : null,
                                ]}
                            />
                        ))}
                    </View>
                )}
                onDone={() => setCurrentIndex(slides.length)} // Atualiza o índice para exibir o botão "Concluir" quando o onboarding terminar
            />
            {currentIndex < slides.length - 1 ? (
                <TouchableOpacity onPress={handleNextButtonPress} style={styles.nextButton}>
                    <Image source={require("../assets/images/nextButton.png")} style={styles.nextButton} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleDoneButtonPress} style={styles.doneButton}>
                    <Image source={require("../assets/images/doneButton.png")} style={styles.nextButton} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    paginationContainer: {
        position: 'absolute',
        bottom: "10%", 
        left: "6%",   
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor: '#D9D9D9',
    },
    activeDot: {
        backgroundColor: '#E01483',
    },
    nextButton: {
        position: 'absolute',
        bottom: "5%",
        right: "8%",
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    doneButton: {
        position: 'absolute',
        bottom: "5%",
        right: "8%",
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
});

export default Onboarding;
