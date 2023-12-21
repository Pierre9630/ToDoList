import { useState } from "react";
import { View, Switch, StyleSheet, GestureResponderEvent, Button } from "react-native"
import { Checkbox, Text,IconButton } from "react-native-paper"

export default function Tache({ title, deleteTask }: { title: string; deleteTask: Function}) {

  const [checked, setChecked] = useState(false);
  const handleClickCheckBox = () => {
    // click sur la checkbox 
    setChecked(!checked);
  }

  return (
    <View style={style.container}>
      
      <Checkbox status={checked ? "checked" : "unchecked"} onPress={handleClickCheckBox} />
      <Text style={style.title}>{title}</Text>
      <IconButton icon="delete" onPress={() => deleteTask(title)} />
    </View>

  )

}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "yellow",
  },
  title: {
    color: "red",

  }
})