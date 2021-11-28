import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Home, Book, CreateSecret, Auth, Onboarding } from '../screens'

const Stack = createNativeStackNavigator()

interface IRouter {
    initialRouteName: string
}
export default function Router({ initialRouteName }: IRouter) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ headerShown: false }}
                />
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
