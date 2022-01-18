import React, {useState} from 'react';
import { Text, View, Pressable, StyleSheet,SafeAreaView, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { propsFlattener } from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import Form, {FormProps, FieldDef} from '../components/Form';

async function save(key: string, value: string) {
  console.log('savoimg')
  await SecureStore.setItemAsync(key, value);
}

export default LoginScreen = (props) => {

  const [showLogin, setShowLogin] = useState(false);
  

return (
<SafeAreaView style={styles.container}>
  { !showLogin && <LoginHome setShowLogin={setShowLogin}/> }
  { showLogin && <Login />}
  </SafeAreaView>

  )
}

const LoginHome = (props) => {
  return (
<>
<View style={styles.welcomeBar}>
    <Text style={styles.welcomeText}>Welcome to RepTracker!</Text>
    </View>
    <View style={styles.buttonContainer}>
<Pressable style={styles.button} onPress={() => {
  props.setShowLogin(true);
}}>
  <Text style={styles.text}>Log In</Text>
</Pressable>
<Pressable style={styles.button}>
  <Text style={styles.text}>Register</Text>
</Pressable>
</View>
</>
  )
}

const fields: FieldDef[] =     [
  {
  id: 'user',
  label: 'Username'
},
{
  id: 'password',
  label: 'Password',
  inputProps: {
    secureTextEntry: true,
  },
}
]

const onLogin = (formVals: any) => {
  alert(JSON.stringify(formVals));
}


const Login = () => {
  return (
    <Form fieldDefs={fields} onSubmit={onLogin}/>
  )};


const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    margin: 20,
  },
  textInput: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderColor: 'yellow',
    borderWidth: 2,
    height: 75,
  },
  text: {
    color: 'yellow',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Avenir-Book'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    fontFamily: 'Avenir-Book',
    padding: 100,
    //alignItems: 'center',

  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-around",
  },
  welcomeBar: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Avenir-Book'
  }
})