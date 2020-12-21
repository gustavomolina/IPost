import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Post(props) {
  
  const [title, setTitle] = useState('');

  return (
    <View style={styles.post}>
      <TextInput 
        placeholder="Publicar" 
        value={title}
        onChangeText={value=>setTitle(value)}
        style={styles.textbox} />
      <Button 
        title="Add" 
        color='#7F39FB'
        onPress={props.addPost}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  }
});
