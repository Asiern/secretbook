import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Home, Book, CreateSecret, Auth } from '../screens'

const Stack = createNativeStackNavigator()

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Book"
                    component={Book}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CreateSecret"
                    component={CreateSecret}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
