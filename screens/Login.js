import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import { firebaseConfig } from "./Firebase.js";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Usuário está logado:', user.uid);
      alert('Usuário está logado:', user.uid)
      navigation.navigate('Lista')
    } catch (error) {
      console.log('Usuário não cadastrado!', error.code, error.message);
    }

  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="xlarge"
        source={{ uri: 'https://i.pravatar.cc/150' }}
        containerStyle={styles.avatar}
      />
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
      <View style={styles.buttonsContainer}>
        <Button
          title="Cadastrar"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Cadastro')}
        />
        <Button
          title="Entrar"
          buttonStyle={styles.button}
          onPress={ handleLogin }
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
  avatar: {
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default LoginScreen;


