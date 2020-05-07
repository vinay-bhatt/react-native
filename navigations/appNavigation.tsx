import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AstroidSearch from '../screens/astroidSearch'
import AstroidView from '../screens/astroid'

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={AstroidSearch} options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#e67e22'
                    },
                    headerTintColor: 'white'
                }} />
                 <Stack.Screen name="AstroidView" component={AstroidView} options={{
                    title: 'Details',
                    headerStyle: {
                        backgroundColor: '#e67e22'
                    },
                    headerTintColor: 'white'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation