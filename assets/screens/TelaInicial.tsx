import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TelaInicial = ({ navigation }) => {
  function navigateToProdutos() {
    navigation.navigate('ProdutosScreen');
  }

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_993849-MLB72611775960_112023-O.webp' }}
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://geekfanaticos.fbitsstatic.net/img/p/funko-pop-spock-special-edition-se-purpose-jornada-nas-estrelas-star-trek-72985/259472.jpg?w=540&h=540&v=no-change&qs=ignore' }}
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://m.media-amazon.com/images/I/51oAW6vBqqL._AC_.jpg' }}
        />
      </View>

      <Text style={styles.title}>Avalie Aqui</Text>
      <Text style={styles.subtitle}>
        Escolha o produto que deseja avaliar e compartilhe sua experiência com outros consumidores.
      </Text>

      <TouchableOpacity style={styles.button} onPress={navigateToProdutos}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7a7a7a',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TelaInicial;
