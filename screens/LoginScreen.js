import React,{useState} from 'react'
import {TextInput, Button,Text, View ,ScrollView,StyleSheet,Alert, TouchableOpacity } from 'react-native';


import { auth } from '../firebase-config';




export default function LoginScreen() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  const submit = () =>{
    auth.signInWithEmailAndPassword(email,password)
    .then(()=>{
      Alert.alert("Login Success")
    })
    .catch(()=>{
      Alert.alert("Login failed")
    })
  }


  return (
    <ScrollView style={styles.fullbg} >
      <View >
    <View style={styles.inputWrapper}>
      <TextInput onChangeText={setEmail}  placeholder='Email' style={styles.input} />
      <TextInput secureTextEntry={true} onChangeText={setPassword} placeholder='Password' style={styles.input} />
      <Button onPress={()=>{
        submit()
      }} title='Login' style={styles.button} ></Button>

    
    </View>
  </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  input:{
    borderRadius:2,
    marginBottom:"5%",
    backgroundColor:"#EEEEEE",
  },
  inputWrapper:{
    marginTop:"50%",
    marginLeft:"5%",
    marginRight:"5%",
  },
  fullbg:{
    backgroundColor:"#950101",
    height:"100%",
  },
  button:{
    backgroundColor:"#EEEEEE",
    color:"#EEEEEE",
  }
});