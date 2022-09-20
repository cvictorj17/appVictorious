import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Input, Text } from 'react-native-elements';
import AppButton from '../components/AppButton';
import { useUserAuth } from "../context/UserAuthContext";
import {db} from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const { signUp } = useUserAuth();

    useEffect(() => {
      navigation.setOptions({
        headerBackTitle: "Login"
      });
    }, [navigation]);

    const register = () => {
       signUp(email, password)
         .then((response) => {
          const uid = response.user.uid;
          const data = {
              nome: name,
              e_mail: email,
              image: imageUrl,
          };
          setDoc(doc(db,"membros",uid),data)
              .then(() => {
                  navigation.replace("Home");
              })
              .catch((error) => {
                  alert(error)
              });
         })
         .catch((error) => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Text h3 style={{marginBottom : 50 }}>Create a account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder='Full name' autoFocus type="text" value={name} onChangeText={(text) => setName(text)}  />
                <Input placeholder='Email' type="text" value={email} onChangeText={(text) => setEmail(text)}  />
                <Input placeholder='Password' type="password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)}  />
                <Input placeholder='Profile Picture URL (optional)' type="text" value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register} />
            </View>
            <AppButton onPress={register} title={"Register"} color={"black"} borderColor={"black"} textColor={"white"} />
        </KeyboardAvoidingView>
    )
}

// thiago e gabriel 

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: "white"
      },
      inputContainer: {
        width: 300
      }

})