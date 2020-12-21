import AppBar from "./AppBar";
import api from "./services/api";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";

import PostsList from "./PostsList";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView
} from "react-native";

export default function LikedPosts({ navigation }) {


  return (
    <View style={styles.container}>
    <View style={styles.statusBar}></View>
    <AppBar />
    <View style={styles.post}>
    
    </View>


    <ScrollView>
    <Button
          title="VOLTAR"
          onPress={() =>
            navigation.navigate('Home')
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