import React, { Component, useState, useEffect } from 'react'
import {Text,View, StyleSheet, TextInput, Button, TouchableOpacity,FlatList} from 'react-native';
import axios from 'axios';


export default function UsersScreen() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      setPosts(res.data);
    })
    .catch(console.error)
  },[])

  /**
   * 
   * 
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }} obj 
   *
   */

  const renderItem = (obj)=>{
    console.log(obj)
    
    return <View style={styles.wrapper} >
      <Text style={styles.title} >{`${obj.index+1})  ${obj.item.name}  #${obj.item.username}`}</Text>
      <Text style={styles.body}>{`phone: ${obj.item.phone}`}</Text>
      <Text style={styles.body}>{`website: ${obj.item.website}`}</Text> 
      <Text style={styles.body}>{`company: ${obj.item.company.name.toLowerCase()}`}</Text> 
      <Text style={styles.body}>{`adress: ${obj.item.address.city.toLowerCase()}`}</Text> 
      <Text style={styles.body}>{`zipcode: ${obj.item.address.zipcode.toLowerCase()}`}</Text>  
       
    </View>
  }


  return (
    <FlatList
    style={styles.flat} 
    data={posts}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    
    />
  )
}



const styles = StyleSheet.create({
  title:{
    borderColor:"red",
    padding:"3%",
    color:"#272121",
    textDecorationLine:"underline",
    textDecorationColor:"red"
  },
  body:{
    paddingLeft:"8%",
    color:"#443737"
  },
  wrapper:{
    borderWidth:0.3,
    borderRadius:5,
    paddingBottom:"5%",
    marginTop:"10%",
    backgroundColor:"#FFF8E5"
  },
  flat:{
    backgroundColor:"#FF3F00",
  }
});