import React, { Component, useState, useEffect } from 'react'
import {Text,View, StyleSheet, TextInput, Button, TouchableOpacity,FlatList} from 'react-native';
import axios from 'axios';

/**
 * 
 * 
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
 */
export default function PostsScreen() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
      setPosts(res.data);
    })
    .catch(console.error)
  },[])

  const renderItem = (obj)=>{
    return <View style={styles.wrapper} >
      <Text style={styles.title} >{obj.item.title}</Text>
      <Text style={styles.body}>{obj.item.body}</Text>  
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
    marginTop:"10%",
    backgroundColor:"#FFF8E5"
  },
  flat:{
    backgroundColor:"#FF3F00",
  }
});