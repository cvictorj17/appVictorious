import { StyleSheet, Text} from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'
import { KeyboardAvoidingView } from 'react-native-web'

const HomeScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <AppButton onPress={() => navigation.navigate('Chat')} title={"Chat"} color={"black"} borderColor={"black"} textColor={"white"} />
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

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