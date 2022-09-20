import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Input } from 'react-native-elements';
import AppButton from '../components/AppButton';
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useUserAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, [])

  const signIn = () => {
    logIn(email, password)
    .then(() => {
     navigation.replace("Home");
    })
    .catch((error) => alert(error.message));
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style="Light" />
      <Image source={require('../assets/images/logo.png')} style={{ width: 200, height: 200 }} />
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autofocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
      </View>
      <AppButton onPress={signIn} title={"Login"} color={"black"} borderColor={"black"} textColor={"white"} />
      <AppButton  onPress={() => navigation.navigate('Register')} color={"white"} borderColor={"red"} textColor={"red"} title={"Register"} />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
    marginTop: 10,
  }
})