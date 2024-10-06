import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface ProdutoProps {
  id: number;
  name: string;
  image: string;
  onAvaliar: (id: number) => void;
}

const Produto: React.FC<ProdutoProps> = ({ id, name, image, onAvaliar }) => {
  return (
    <View style={styles.produtoContainer}>
      <Image source={{ uri: image }} style={styles.produtoImage} />
      <Text style={styles.produtoName}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onAvaliar(id)}>
        <Text style={styles.buttonText}>Avaliar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  produtoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  produtoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  produtoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
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
});

export default Produto;
