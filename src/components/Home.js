import AppBar from "./AppBar";
import api from "./services/api";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import PostsList from "./PostsList";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView
} from "react-native";



export default function Home({ navigation }) {
  const [title, setTitle] = useState("");

  const [post, setPost] = useState({});

  const [posts, setPosts] = useState([]);
  const addPost = () => {
    if (title.length > 0) {
      setPosts([...posts, { key: Date.now(), name: title, isChecked: false }]);
      // clear the value of the textfield
      setTitle("");
    }
  };

  const checkPost = id => {
    setPosts(
      posts.map(post => {
        if (post.key === id) {
          post.isChecked = !post.isChecked;
        }
        return post;
      })
    );
  };

  const deletePost = id => {
    setPosts(posts.filter(post => {
      return post.key !== id;
    }));
  };

  const initPostsList = () => {
    api.get("1")
      .then((response) => {
        console.log(response)
        setPosts([...posts, { key: Date.now(), name: response.data.title, isChecked: false }])
      }
      )
  }

  useEffect(() => {
    initPostsList()
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <AppBar />
      <View style={styles.post}>
        <TextInput
          placeholder="Escreva sua publicação"
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.textbox}
        />

        <Button title="Publicar" color="#7F39FB" onPress={() => addPost()} />
      </View>


      <ScrollView>
        {posts.map(post => (
          <PostsList
            key={post.key}
            post={post}
            checkPost={checkPost}
            deletePost={deletePost}
          />
        ))}

        <Button
          title="VER CURTIDAS"
          onPress={() =>
            navigation.navigate('LikedPosts')
          }
        />
      </ScrollView>


    </View>
  );


}


const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#7F39FB",
    color: "#fff",
    width: "100%",
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  post: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%"
  }
});