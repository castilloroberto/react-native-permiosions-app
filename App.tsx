// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable,PermissionsAndroid, StyleSheet, Text, View, Button } from 'react-native';

const askForPhoneCallPermission = async ()=>{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
      {
        title:"Permiso de acceso",
        message:"Esta app necesirta acceder a funciones de llamada telefonica",
        buttonNeutral:"Preguntar luego",
        buttonNegative:"Cancelar",
        buttonPositive:"OK"
      }

    )
    
  } catch (error) {
    
  }
}

export default function App() {

  const [counter, setCounter] = useState(0)

  return (
    <View 
    style={styles.container}>
      <Pressable
        onPress={()=> setCounter(counter + 1)}
        >
        <Text>Clicks</Text>

      </Pressable>
      <Text>{counter}</Text>
      <Button 
        onPress={askForPhoneCallPermission}
        title="Permisos"/>
      {/* <StatusBar style="auto" /> */}
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
});
