import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const ProdutosScreen = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.16.105:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  function handleAvaliar(produtoId) {
    navigation.navigate('AvaliacaoScreen', { productId: produtoId });
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />; // Indicador de loading
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.produtoContainer}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.produtoImage} />
              <Text style={styles.produtoName}>{item.name}</Text>
              <Text style={styles.produtoBrand}>{item.brand}</Text>
              <Text style={styles.produtoPrice}>{item.price}</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.produtoDescription}>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => handleAvaliar(item.id)}>
                <Text style={styles.buttonText}>Avaliar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  produtoContainer: {
    marginBottom: 20,
  },
  card: {
    borderColor: '#8a5cb3', 
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  produtoImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  produtoName: {
    fontSize: 20, 
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  produtoPrice: {
    fontSize: 18,
    fontWeight: 'bold', 
    marginVertical: 5,
  },
  produtoBrand: {
    fontSize: 16,
    marginVertical: 5,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(138, 92, 179, 0.3)', // Fundo roxo transparente
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%', // Para ocupar a largura do card
  },
  produtoDescription: {
    fontSize: 14,
    textAlign: 'center', 
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProdutosScreen;
