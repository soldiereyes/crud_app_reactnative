import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from './src/views/List/UserList';
import UserForm from './src/views/Form/UserForm';
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
                                title: "Listagem de Membros",
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