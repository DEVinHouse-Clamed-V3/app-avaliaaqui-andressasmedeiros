import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

const AvaliacaoScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [experience, setExperience] = useState('');
  const [loading, setLoading] = useState(false); //controle do loading

  function handleSubmit() {
    const evaluation = {
      productId: route.params.productId,
      name,
      email,
      feedback,
      experience,
      recommend: false,
    };

    setLoading(true); // Inicia o loading

    fetch('http://192.168.16.105:3000/evaluations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(evaluation),
    })
      .then((response) => response.json())
      .then(() => {
        Alert.alert('Sucesso', 'Avaliação enviada com sucesso!'); 
        navigation.goBack(); 
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false); 
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Feedback"
        value={feedback}
        onChangeText={setFeedback}
      />
      <TextInput
        style={styles.input}
        placeholder="Experiência"
        value={experience}
        onChangeText={setExperience}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading} // Desabilita o botão enquanto carrega
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Enviar Feedback</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AvaliacaoScreen;
