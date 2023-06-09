import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [count,setCount] = useState(0)
  function increase(){
    setCount(count+1)
  }
  function decrease(){
    if(count-1<0){
      alert('Negatívba nem mehet')
    }
    else{setCount(count-1)}
    
  }
  function Reset(){
    setCount(0)
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>
        Számláló
      </Text>

      <View>
        <Text style={styles.count}>{count}</Text>
        <Button title='Növel'
        onPress={increase}/>
      </View>
      <View>
        <Button title='Minus'
        onPress={decrease}/>
      </View>
      <View>
        <Button title='Reset'
        onPress={Reset}/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

function click(){
  console.log('xd')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#129dc4',
    fontSize: 35,
  },
  count: {
    fontSize: 45,
    color: 'yellow',
  },
});
