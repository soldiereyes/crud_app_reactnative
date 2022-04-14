import React from 'react';
/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'; */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import {Button, Icon} from 'react-native-elements';
import {UsersProvider} from './src/context/UserContext';

const Stack = createStackNavigator();


export default function App() {
  return (
      <UsersProvider>
        <NavigationContainer>
          <Stack.Navigator
              initialRouteName="UserList"
              screenOptions={screenOptions}>
            <Stack.Screen
                name="UserList"
                component={UserList}
                options={({navigation}) => {
                  return {
                    title: "Entre para a Sociedade",
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate("UserForm")}
                            icon={<Icon name="add" size={30} color="white"/>}
                            type="clear"
                        />
                    )
                  }
                }}/>

            <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{
                  title: "Formulário de Associados"
                }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </UsersProvider>

  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#00AFAD'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'

  }
}