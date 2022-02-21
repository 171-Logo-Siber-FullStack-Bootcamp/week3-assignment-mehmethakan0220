import React, {useState} from 'react'
import {Text,View, StyleSheet,ScrollView, Alert, TextInput, Button, TouchableOpacity} from 'react-native';


import { auth } from '../firebase-config';

export default function RegisScreen() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const submit = () =>{
    auth.createUserWithEmailAndPassword(email,password)
    .then(()=>{
      Alert.alert("Congratulations you have joined our community")
    })
    .catch(()=>{
      Alert.alert("Something went wrong")
    })
  }

  return (
    <ScrollView style={styles.fullbg}>
    <View style={styles.inputWrapper}>
      <TextInput onChange={setEmail}  placeholder='Email' style={styles.input}/>
      <TextInput secureTextEntry={true} onChange={setPassword} placeholder='Password' style={styles.input} />
      <Button onPress={()=>{

        submit()
      }
      } title='Register' style={styles.button} ></Button>

      
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