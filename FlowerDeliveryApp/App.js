import React from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Home from './screens/Home'

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#2596be',
    shadowColor: '#2596be',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    width: width - 60
  },
  buttonHover: {
    marginTop: 10,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    shadowColor: '#2596be',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: '#2596be',
    color: '#2596be',
    width: width - 60,
    marginLeft: 30,
    marginTop: 60,
    marginBottom: 50
  }
});