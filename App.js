import React, { useState, useEffect } from "react";
import api from "./src/components/services/api";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/components/Home";
import LikedPosts from "./src/components/LikedPosts";


const Stack = createStackNavigator();

export default function App() {
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Postagens' }}
        />
        <Stack.Screen name="LikedPosts" 
        component={LikedPosts}  
        options={{ title: 'Postagens Curtidas' }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


