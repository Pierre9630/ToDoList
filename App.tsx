import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from "react";

import Tache from './components/Tache';

export default function App() {
  const [taches, setTaches] = useState([{ title: 'Mes Tâches' }]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = () => {
    if (nouvelleTache.trim() !== '') {
      setTaches([...taches, { title: nouvelleTache }]);
      setNouvelleTache('');
    }
  };

  const supprimerTache = (title: string) => {
    //console.log("supprimer");
    const copyTaches = [...taches];
    const index = copyTaches.findIndex(item => item.title === title);
    copyTaches.splice(index, 1); 
    setTaches(copyTaches);
  };

  return (
    <View style={styles.container}>
      <Text>To Do List</Text>
      
      {taches.map((tache, index) => (
        <Tache key={index} title={tache.title} deleteTask={supprimerTache} />
        
      ))}
      
      <TextInput
        placeholder="Nouvelle tâche"
        value={nouvelleTache}
        onChangeText={(text) => setNouvelleTache(text)}
        style={styles.input}
      />

      <Button title="Ajouter Tâche" onPress={ajouterTache} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
  },
});
