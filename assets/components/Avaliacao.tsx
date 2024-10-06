import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface AvaliacaoProps {
  onSubmit: (evaluation: {
    productId: number;
    name: string;
    email: string;
    feedback: string;
    experience: string;
    recommend: boolean;
  }) => void;
  productId: number;
}

const Avaliacao: React.FC<AvaliacaoProps> = ({ onSubmit, productId }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [recommend, setRecommend] = React.useState(false);

  function handleSubmit() {
    const evaluation = {
      productId,
      name,
      email,
      feedback,
      experience,
      recommend,
    };
    onSubmit(evaluation);
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
      <Button title="Enviar Feedback" onPress={handleSubmit} />
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
});

export default Avaliacao;
