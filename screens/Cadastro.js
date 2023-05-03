import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { firebaseConfig } from "./Firebase.js";


const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = initializeApp(firebaseConfig);

  const handleSignup = async () => {
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, {
         email: email,
      });
      console.log('Usuário cadastrado com sucesso!', userCredential.user);
      navigation.navigate('Lista');
    } catch (error) {
      console.log('Usuário não criado!', error);
    }
  };


  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        CADASTRO
      </Text>
     
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
          buttonStyle={styles.button}
          onPress={handleSignup } 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});

export default SignupScreen;